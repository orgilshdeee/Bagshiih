import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import { Outlet, Route, Routes } from "react-router";
import PlayerInfo from "./components/PlayerInfo";
import MainHeader from "./components/MainHeader";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contents from "./components/Contents";
import Content from "./components/Content";
export default function App() {
  const [langs, setLangs] = useState({});
  const [titles, setTitles] = useState();
  useEffect(() => {
    fetch("data/ProgLangs.json")
      .then((e) => e.json())
      .then((res) => setLangs(res));
  }, []);

  useEffect(() => {
    setTitles(Object.keys(langs));
  }, [langs]);

  //titles = ["Html","Css","JavaScript","React"]
  return (
    <>
      <MainHeader data={langs} />
      <Routes>
        {titles &&
          titles.map((title, i) => (
            <Route
              key={i}
              path={`${title}`}
              element={<Contents data={Object.keys(langs[`${title}`])} />}
            >
              {Object.keys(langs[`${title}`]).map((innerTitle, i) => {
                return (
                  <Route
                    path={`${innerTitle}`}
                    key={i}
                    element={
                      <Content data={langs[`${title}`][`${innerTitle}`]} />
                    }
                  />
                );
              })}
            </Route>
          ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
