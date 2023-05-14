import { type NextPage } from "next";
import Head from "next/head";
import { Card, Title, Text, Grid, Col } from "@tremor/react";

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
            <Card className="h-full border-gray-800 bg-gray-900">
              <div className="h-60">
                <input
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                ></input>
              </div>
            </Card>
          </Col>

          {/* KPI sidebar */}
          <Col numColSpanLg={3}>
            <div className="space-y-6">
              <Card>
                <div className="h-24" />
                Hello???
              </Card>
              <Card>
                <div className="h-24" />
                Hello???
              </Card>
            </div>
          </Col>
        </Grid>
      </main>
    </>
  );
};

export default Home;
