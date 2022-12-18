
import Notification from "../components/Notification"
import { useCallback, useMemo, useState } from "react"

import React from "react";

export default () => {
    const openNotice = useCallback((event) => {
        event.stopPropagation();
        console.log("open Notice")
    }, []);

    const closeNotice = useCallback((event) => {
        event.stopPropagation();
        console.log("close Notice")
    }, []);

    const Notice = useMemo(() => <div>this is a component from custom hook!</div>, []);
    return {
        Notice,
        openNotice,
        closeNotice
    };
};
