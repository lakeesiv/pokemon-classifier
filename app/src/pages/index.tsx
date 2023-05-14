import { type NextPage } from "next";
import Head from "next/head";
import { Card, Title, Text, Grid, Col } from "@tremor/react";
import FileDropzone from "~/components/FileDropzone";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

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
              <div className="h-60">
                <FileDropzone />
              </div>
            </Card>
          </Col>

          {/* KPI sidebar */}
          <Col numColSpanLg={3}>
            <div className="space-y-6">
              <Card className="bg-gray-900 ring-black">
                <div className="h-24" />
              </Card>
              <Card className="bg-gray-900 ring-black">
                <div className="h-24" />
              </Card>
            </div>
          </Col>
        </Grid>
      </main>
    </>
  );
};

export default Home;
