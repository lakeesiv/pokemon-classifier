import { type NextPage } from "next";
import Head from "next/head";
import { Card, Title, Text, Grid, Col, Subtitle } from "@tremor/react";
import FileDropzone from "~/components/FileDropzone";
import { useState } from "react";
import { getPrediction } from "~/utils/hf";
import PredictionBarchart from "~/components/PredictionBarchart";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-950 p-10">
        <Title>Pokemon Classifier - Lakee Sivaraya</Title>
        <Text>Upload Image of Pokemon Below</Text>

        <Grid numColsLg={6} className="mt-6 gap-6 ">
          {/* Main section */}
          <Col numColSpanLg={3}>
            <Card className=" h-full bg-gray-900 ring-black">
              <div>
                <FileDropzone
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                />
                {selectedImage && (
                  <button
                    className="rounded-md bg-gray-700 px-4 py-2 text-white"
                    onClick={async () => {
                      const prediction = await getPrediction(selectedImage);
                      console.log(prediction);
                      setPrediction(prediction);
                    }}
                  >
                    Classify!
                  </button>
                )}
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
                <Subtitle>Most likely Pokemon: </Subtitle>
              </Card>
            </div>
          </Col>
        </Grid>
      </main>
    </>
  );
};

export default Home;
