import React from "react";
import { Card, Title, BarChart, Subtitle } from "@tremor/react";

interface Props {
  predictions?: { score: number; label: string }[];
}

const processPredictions = (
  predictions: { score: number; label: string }[]
) => {
  // convert score to percentage and round to 2 decimal places
  return predictions.map((prediction) => ({
    name: prediction.label,
    Prediction: Math.round(prediction.score * 10000) / 100,
  }));
};

const mockData: { score: number; label: string }[] = [
  {
    score: 0.0,
    label: "Pikachu",
  },
  {
    score: 0,
    label: "Diglett",
  },
  {
    score: 0,
    label: "Staryu",
  },
  {
    score: 0,
    label: "Weedle",
  },
  {
    score: 0,
    label: "Weepinbell",
  },
];

const PredictionBarchart = ({ predictions }: Props) => {
  // blur the barchart if there are no predictions
  const blur = predictions ? "" : "blur-sm";
  return (
    <Card className={"bg-gray-950 ring-transparent " + blur}>
      <Title>Class Probabilities</Title>
      <Subtitle>
        Probability of the image being a particular Pokemon from Gen 1
      </Subtitle>
      <BarChart
        className={"mt-6 h-60 bg-gray-950"}
        data={processPredictions(predictions || mockData)}
        index="name"
        categories={["Prediction"]}
        colors={["red"]}
        yAxisWidth={48}
      />
    </Card>
  );
};

export default PredictionBarchart;
