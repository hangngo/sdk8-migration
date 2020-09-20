import React from "react";
import Page from "../components/Page";
import {BarChart, LineChart} from "@gooddata/sdk-ui-charts";
import {LdmExt} from "../ldm";

const measures = [
    LdmExt.FranchiseFees,
    LdmExt.FranchiseFeesAdRoyalty,
    LdmExt.FranchiseFeesInitialFranchiseFee,
    LdmExt.FranchiseFeesOngoingRoyalty,
];

const Home = () => {
    return (
        <Page>
            <div className="linechart-abc" style={{height: 500 + 'px'}}>
                <LineChart
                measures={measures}
                />
            </div>
            <div className="barchart-abc" style={{height: 500 +'px'}}>
                <BarChart
                measures={measures}
                />
            </div>
        </Page>
    );
};

export default Home;
