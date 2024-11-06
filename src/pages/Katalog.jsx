import React from "react";
import LandingPageLayout from "../components/Layout/LandingPageLayout";
import Catalog from '../components/Features/Catalog'

const LandingPages = () => {
    return(
        <LandingPageLayout>
            <Catalog/>
        </LandingPageLayout>
    )
}

export default LandingPages;