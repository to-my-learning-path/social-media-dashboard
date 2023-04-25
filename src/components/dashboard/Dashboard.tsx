const Dashboard = () => {
  return (
    <main>
      <Header />
      <Statistic />
      <Overview />
    </main>
  );
};

const Header = () => (
  <header>
    <div>
      <h1>Social Media Dashboard</h1>
      <p>Total Followers: 23,004</p>
    </div>
    <div>
      <p>Dark Mode</p>
      <input type="checkbox" name="" id="" />
    </div>
  </header>
);

const Statistic = () => (
  <section>
    <StatisticItem
      icon="facebook"
      username="nathanf"
      followers={1987}
      difference={12}
    />
    <StatisticItem
      icon="twitter"
      username="nathanf"
      followers={1044}
      difference={99}
    />
    <StatisticItem
      icon="facebook"
      username="nathanf"
      followers={11000}
      difference={1099}
    />
    <StatisticItem
      icon="facebook"
      username="nathanf"
      followers={8239}
      difference={144}
    />
  </section>
);

type StatisticItemProps = {
  icon: string;
  username: string;
  followers: number;
  difference: number;
};

const StatisticItem = ({
  icon,
  username,
  followers,
  difference,
}: StatisticItemProps) => (
  <div>
    <div>
      <img src={icon} alt="" />
      <p>{username}</p>
    </div>
    <div>
      <p>{followers}</p>
      <p>{difference}</p>
    </div>
    <div>
      <img src="" alt="" />
      <p>{difference} Today</p>
    </div>
  </div>
);

const Overview = () => (
  <section>
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

export default Dashboard;
