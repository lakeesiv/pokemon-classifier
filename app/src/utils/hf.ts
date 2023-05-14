// Hugging Face API calls

const API_URL = "https://api-inference.huggingface.co/models/lakeesiv/pokemon";
const TOKEN = process.env.NEXT_PUBLIC_HF_TOKEN as string;

// take in an image binary blob and return a list of predictions
export const getPrediction = async (imgBlob: Blob) => {
  const response = await fetch(API_URL, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    method: "POST",
    body: imgBlob,
  });
  const result = (await response.json()) as { label: string; score: number }[];
  return result;
};
