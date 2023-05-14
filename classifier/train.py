from transformers import ViTFeatureExtractor, ViTForImageClassification
from dataset import get_datasets
from transformers import Trainer, TrainingArguments
import torch

train_dataset, test_dataset, id2label, label2id, num_classes = get_datasets()

# ---- ViT Model ----

feature_extractor = ViTFeatureExtractor.from_pretrained(
    'google/vit-base-patch16-224-in21k')

model = ViTForImageClassification.from_pretrained(
    'google/vit-base-patch16-224-in21k',
    num_labels=num_classes,
    label2id=label2id,
    id2label=id2label)


def collate_fn(batch):
    # feature extract the batch images and add labels
    inps = feature_extractor([x[0] for x in batch], return_tensors="pt")
    labels = torch.tensor([x[1] for x in batch])
    inps["labels"] = labels

    return inps

# ---- Training ----


training_args = TrainingArguments(
    output_dir='./model',
    num_train_epochs=1,
    per_device_train_batch_size=64,
    per_device_eval_batch_size=64,
    weight_decay=0.01,
    save_steps=10000,
    save_total_limit=2,
    evaluation_strategy="epoch",
    fp16=True,
    learning_rate=2e-4,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=train_dataset,
    data_collator=collate_fn
)

trainer.train()
