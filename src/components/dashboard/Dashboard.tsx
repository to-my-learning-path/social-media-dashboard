import UpArrowIcon from "../../assets/images/icon-up.svg";
import DownArrowIcon from "../../assets/images/icon-down.svg";

const Dashboard = () => {
  return (
    <div className=" bg-neutral-light-white">
      <Header />
      <main>
        <Statistic />
        <Overview />
      </main>
    </div>
  );
};

const Header = () => (
  <header className=" flex max-w-5xl flex-col rounded-b-2xl bg-neutral-light-verypaleblue px-6 py-8 md:flex-row md:items-start md:justify-between lg:mx-auto">
    <div className=" border-b-[1px] border-neutral-light-darkgrayishblue pb-6 md:border-0 md:pb-0">
      <h1 className=" text-2xl font-bold text-neutral-light-verydarkblue">
        Social Media Dashboard
      </h1>
      <p className=" font-bold text-neutral-light-darkgrayishblue">
        Total Followers: 23,004
      </p>
    </div>
    <div className=" flex items-center justify-between pt-6 md:pt-0">
      <p className=" font-bold text-neutral-light-darkgrayishblue">Dark Mode</p>
      <input type="checkbox" name="" id="" />
    </div>
  </header>
);

const Statistic = () => (
  <section className=" grid max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-2 lg:mx-auto lg:grid-cols-4">
    <StatisticItem
      plateform="facebook"
      username="nathanf"
      followers={1987}
      difference={12}
      UpOrDown="up"
    />
    <StatisticItem
      plateform="twitter"
      username="nathanf"
      followers={1044}
      difference={99}
      UpOrDown="up"
    />
    <StatisticItem
      plateform="instagram"
      username="nathanf"
      followers={11000}
      difference={1099}
      UpOrDown="up"
    />
    <StatisticItem
      plateform="youtube"
      username="nathanf"
      followers={8239}
      difference={144}
      UpOrDown="down"
    />
  </section>
);

type StatisticItemProps = {
  plateform: string;
  username: string;
  followers: number;
  difference: number;
  UpOrDown: string;
};

const StatisticItem = ({
  plateform,
  username,
  followers,
  difference,
  UpOrDown,
}: StatisticItemProps) => (
  <div
    className={`  bg-gra flex flex-col items-center gap-4 rounded-md border-t-4 ${plateformBgColor(
      plateform
    )} bg-neutral-light-lightgrayishblue py-6`}
  >
    <div className=" flex items-center gap-2">
      <img src={getIconImageUrl(plateform)} alt="" />
      <p className=" font-bold text-neutral-light-darkgrayishblue">
        @{username}
      </p>
    </div>
    <div className=" text-center">
      <p className=" text-5xl font-bold text-neutral-light-verydarkblue">
        {followers}
      </p>
      <p className=" uppercase tracking-widest text-neutral-light-darkgrayishblue">
        followers
      </p>
    </div>
    <div className=" flex items-center gap-2">
      <img src={UpOrDown === "up" ? UpArrowIcon : DownArrowIcon} alt="" />
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

const plateformBgColor = (plateform: string) => {
  switch (plateform.toLowerCase()) {
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
  <section className=" max-w-5xl lg:mx-auto">
    <h2>Overview - Today</h2>
    <div>
      <OverviewItem
        contentDetail="Page Views"
        plateform="facebook"
        count={87}
        difference={3}
      />
      <OverviewItem
        contentDetail="Page Views"
        plateform="facebook"
        count={87}
        difference={3}
      />
    </div>
  </section>
);

type OverviewItemProps = {
  contentDetail: string;
  plateform: string;
  count: number;
  difference: number;
};
const OverviewItem = ({
  contentDetail,
  plateform,
  count,
  difference,
}: OverviewItemProps) => (
  <div>
    <div>
      <p>{contentDetail}</p>
      <img src="" alt="" />
    </div>
    <div>
      <p>{count}</p>
      <div>
        <img src="" alt="" />
        <p>{difference}%</p>
      </div>
    </div>
  </div>
);

function getIconImageUrl(name: string) {
  return new URL(`../../assets/images/icon-${name}.svg`, import.meta.url).href;
}

export default Dashboard;
