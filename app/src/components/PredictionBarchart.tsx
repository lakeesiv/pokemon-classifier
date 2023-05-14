import React from "react";
import { Card, Title, BarChart, Subtitle } from "@tremor/react";

interface Props {
  predictions: { score: number; label: string }[];
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

const PredictionBarchart = ({ predictions }: Props) => {
  return (
    <Card
      className="bg-gray-950 ring-transparent
	"
    >
      <Title>Class Probabilities</Title>
      <Subtitle>
        Probability of the image being a particular Pokemon from Gen 1
      </Subtitle>
      <BarChart
        className="mt-6 h-60 bg-gray-950"
        data={processPredictions(predictions)}
        index="name"
        categories={["Prediction"]}
        colors={["red"]}
        yAxisWidth={48}
      />
    </Card>
  );
};

export default PredictionBarchart;
