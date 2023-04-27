import { useState } from "react";
import { Switch } from "@headlessui/react";

import UpArrowIcon from "../../assets/images/icon-up.svg";
import DownArrowIcon from "../../assets/images/icon-down.svg";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <Statistic />
        <Overview />
      </main>
    </>
  );
};

const Header = () => {
  const [enabled, setEnabled] = useState(true);

  const handleToggleChange = () => {
    setEnabled((e) => !e);

    if (enabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <header className=" flex max-w-5xl flex-col rounded-b-2xl bg-neutral-light-verypaleblue bg-opacity-[0.4] px-6 py-8 dark:bg-neutral-dark-verydarkblue-topbgpattern dark:bg-opacity-0 md:flex-row md:items-start md:justify-between lg:mx-auto">
      <div className=" border-b-[1px] border-neutral-light-darkgrayishblue pb-6 md:border-0 md:pb-0">
        <h1 className=" text-2xl font-bold text-neutral-light-verydarkblue dark:text-neutral-dark-white">
          Social Media Dashboard
        </h1>
        <p className=" font-bold text-neutral-light-darkgrayishblue dark:text-neutral-dark-desaturatedblue">
          Total Followers: 23,004
        </p>
      </div>
      <div className=" flex items-center justify-between pt-6 md:pt-0">
        <p className=" pr-2 font-bold text-neutral-light-darkgrayishblue dark:text-neutral-dark-desaturatedblue">
          Dark Mode
        </p>
        <Switch
          checked={enabled}
          onChange={handleToggleChange}
          className={` relative inline-flex h-6 w-11 items-center rounded-full ${
            enabled
              ? "bg-toggle-light hover:bg-gradient-to-r hover:from-toggle-dark-from hover:to-toggle-dark-to"
              : "bg-gradient-to-r from-toggle-dark-from to-toggle-dark-to"
          }`}
        >
          <span className="sr-only">Enable Dark Mode</span>
          <span
            className={`${
              enabled
                ? "translate-x-6 bg-neutral-dark-white"
                : "translate-x-1 bg-neutral-dark-verydarkblue-topbgpattern"
            } inline-block h-4 w-4 transform rounded-full  transition`}
          />
        </Switch>
      </div>
    </header>
  );
};

const Statistic = () => (
  <section className=" grid max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-2 lg:mx-auto lg:grid-cols-4">
    <StatisticItem
      platform="facebook"
      username="nathanf"
      followers={1987}
      difference={12}
      UpOrDown="up"
    />
    <StatisticItem
      platform="twitter"
      username="nathanf"
      followers={1044}
      difference={99}
      UpOrDown="up"
    />
    <StatisticItem
      platform="instagram"
      username="nathanf"
      followers={11000}
      difference={1099}
      UpOrDown="up"
    />
    <StatisticItem
      platform="youtube"
      username="nathanf"
      followers={8239}
      difference={144}
      UpOrDown="down"
    />
  </section>
);

type StatisticItemProps = {
  platform: string;
  username: string;
  followers: number;
  difference: number;
  UpOrDown: string;
};

const StatisticItem = ({
  platform,
  username,
  followers,
  difference,
  UpOrDown,
}: StatisticItemProps) => (
  <div
    className={` bg-gra flex flex-col items-center gap-4 rounded-md border-t-4 shadow-md hover:bg-neutral-light-lightgrayishblue ${platformBgColor(
      platform
    )} bg-neutral-light-verypaleblue py-6 dark:bg-neutral-dark-darkdesaturatedblue dark:hover:bg-opacity-80`}
  >
    <div className=" flex items-center gap-2">
      <img src={getIconImageUrl(platform)} alt={platform} />
      <p className=" font-bold text-neutral-light-darkgrayishblue dark:text-neutral-dark-desaturatedblue">
        @{username}
      </p>
    </div>
    <div className=" text-center">
      <p className=" text-5xl font-bold text-neutral-light-verydarkblue dark:text-neutral-dark-white">
        {abbreviateNumber(followers)}
      </p>
      <p className=" uppercase tracking-widest text-neutral-light-darkgrayishblue dark:text-neutral-dark-desaturatedblue">
        followers
      </p>
    </div>
    <div className=" flex items-center gap-2">
      <img
        src={UpOrDown === "up" ? UpArrowIcon : DownArrowIcon}
        alt={UpOrDown === "up" ? "Increased by" : "Decreased by"}
      />
      <p
        className={`${
          UpOrDown === "up"
            ? "text-primary-limegreen"
            : "text-primary-brightred"
        } font-bold`}
      >
        {difference} Today
      </p>
    </div>
  </div>
);

const platformBgColor = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return "border-primary-facebook";
    case "twitter":
      return "border-primary-twitter";
    case "instagram":
      return "border-primary-instagram-from";
    case "youtube":
      return "border-primary-youtube";
    default:
      return null;
  }
};

const Overview = () => (
  <section className=" max-w-5xl px-6 py-6 lg:mx-auto">
    <h2 className=" pb-4 text-xl font-bold text-neutral-light-darkgrayishblue dark:text-neutral-dark-desaturatedblue">
      Overview - Today
    </h2>
    <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <OverviewItem
        contentDetail="Page Views"
        platform="facebook"
        count={87}
        difference={3}
        upOrDown="up"
      />
      <OverviewItem
        contentDetail="Likes"
        platform="facebook"
        count={52}
        difference={2}
        upOrDown="down"
      />
      <OverviewItem
        contentDetail="Likes"
        platform="instagram"
        count={5462}
        difference={2257}
        upOrDown="up"
      />
      <OverviewItem
        contentDetail="Page Views"
        platform="instagram"
        count={52000}
        difference={1375}
        upOrDown="up"
      />
      <OverviewItem
        contentDetail="Retweets"
        platform="twitter"
        count={117}
        difference={303}
        upOrDown="up"
      />
      <OverviewItem
        contentDetail="Likes"
        platform="twitter"
        count={507}
        difference={553}
        upOrDown="up"
      />
      <OverviewItem
        contentDetail="Likes"
        platform="youtube"
        count={107}
        difference={19}
        upOrDown="down"
      />
      <OverviewItem
        contentDetail="Total Views"
        platform="youtube"
        count={1407}
        difference={12}
        upOrDown="down"
      />
    </div>
  </section>
);

type OverviewItemProps = {
  contentDetail: string;
  platform: string;
  count: number;
  difference: number;
  upOrDown: string;
};
const OverviewItem = ({
  contentDetail,
  platform,
  count,
  difference,
  upOrDown,
}: OverviewItemProps) => (
  <div className=" grid grid-cols-2 grid-rows-2 rounded-md bg-neutral-light-verypaleblue p-6 shadow-md hover:bg-neutral-light-lightgrayishblue dark:bg-neutral-dark-darkdesaturatedblue dark:hover:bg-opacity-80">
    <p className="  text-overviewCardHeadingfont font-bold text-neutral-light-darkgrayishblue dark:text-neutral-dark-desaturatedblue">
      {contentDetail}
    </p>
    <img
      className=" justify-self-end"
      src={getIconImageUrl(platform)}
      alt={platform}
    />

    <p className=" text-3xl font-bold text-neutral-light-verydarkblue dark:text-neutral-dark-white">
      {abbreviateNumber(count)}
    </p>
    <div className=" flex items-center gap-2 self-end justify-self-end">
      <img
        src={upOrDown === "up" ? UpArrowIcon : DownArrowIcon}
        alt={"up" === "up" ? "Increased by" : "Decreased by"}
      />
      <p
        className={`${
          upOrDown === "up"
            ? "text-primary-limegreen"
            : "text-primary-brightred"
        } text-overviewCardHeadingfont font-bold`}
      >
        {difference}%
      </p>
    </div>
  </div>
);

function abbreviateNumber(n: number) {
  if (n < 1e4) return n;
  if (n >= 1e4) return +(n / 1e3).toFixed(1) + "K";
}

function getIconImageUrl(name: string) {
  return new URL(
    `../../assets/images/icon-${name.toLowerCase()}.svg`,
    import.meta.url
  ).href;
}

export default Dashboard;
