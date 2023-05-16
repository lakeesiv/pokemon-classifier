import { type NextPage } from "next";
import Head from "next/head";
import { Card, Title, Text, Grid, Col, Subtitle } from "@tremor/react";
import FileDropzone from "~/components/FileDropzone";
import { useState } from "react";
import { getPrediction } from "~/utils/hf";
import PredictionBarchart from "~/components/PredictionBarchart";
import { useToast } from "~/ui/use-toast";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { toast } = useToast();

  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    undefined
  );
  const [prediction, setPrediction] = useState<
    { score: number; label: string }[] | undefined
  >(undefined);

  return (
    <>
      <Head>
        <title>Pokemon Classifier</title>
        <meta name="description" content="Pokemon Classifier" />
      </Head>
      <main className="bg-gray-950 p-10">
        <Title>Pokemon Classifier - Lakee Sivaraya</Title>
        <Text>Upload Image of Pokemon Below (Classifies Gen 1 Pokemon)</Text>

        <Grid numColsLg={6} className="mt-6 gap-6 ">
          {/* Main section */}
          <Col numColSpanLg={3}>
            <Card className=" h-full bg-gray-900 ring-black">
              <div>
                <FileDropzone
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                  onClassify={async () => {
                    toast({
                      title: "Classifying Image",
                      description: "Please wait",
                    });

                    try {
                      if (!selectedImage) {
                        return;
                      }

                      const prediction = await getPrediction(selectedImage);
                      console.log(prediction);
                      setPrediction(prediction);
                      toast({
                        title: "Image Classified",
                        description:
                          "Please see the sidebar for the prediction",
                      });
                    } catch (error) {
                      console.log(error);
                      toast({
                        title: "Please wait for the model to load",
                        description:
                          "Please wait around 1min seconds for the model to load",
                        variant: "destructive",
                      });
                    }
                  }}
                />
              </div>
            </Card>
          </Col>

          {/* KPI sidebar */}

          <Col numColSpanLg={3}>
            <div className="space-y-6">
              <Card className="bg-gray-900 ring-black">
                <PredictionBarchart predictions={prediction} />
              </Card>
              <Card className="bg-gray-900 ring-black">
                <Title>Prediction</Title>
                <Subtitle>
                  Most likely Pokemon:{" "}
                  {prediction
                    ? prediction[0]
                      ? prediction[0].label
                      : "None"
                    : "None"}
                </Subtitle>
              </Card>
            </div>
          </Col>
        </Grid>
      </main>
    </>
  );
};

export default Home;
