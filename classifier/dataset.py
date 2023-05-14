from torch.utils.data import Dataset, random_split
from torchvision import datasets
from torchvision.transforms import ToTensor

BASE_PATH = 'data/PokemonData/'  # contains folders of images for each pokemon


class PokemonImageDataset(Dataset):
    def __init__(self, transform=None):
        self.transform = transform
        self.pokemon = datasets.ImageFolder(
            root=BASE_PATH, transform=ToTensor())

    def __len__(self):
        return len(self.pokemon)

    def __getitem__(self, idx):
        image, label = self.pokemon[idx]

        if self.transform:
            image = self.transform(image)
        return image, label


def get_datasets():
    dataset = PokemonImageDataset()
    train_size = int(0.8 * len(dataset))
    test_size = len(dataset) - train_size
    train_dataset, test_dataset = random_split(
        dataset, [train_size, test_size])

    id2label = {v: k for k, v in dataset.pokemon.class_to_idx.items()}
    label2id = {k: v for k, v in dataset.pokemon.class_to_idx.items()}
    num_classes = len(dataset.pokemon.classes)

    return train_dataset, test_dataset, id2label, label2id, num_classes
