import { useContext } from "react";
import { ChannelsContext } from "./context/ChannelsContext";
import Headline from "./components/Headline";
import TabsContent from "./components/TabsContent";
import Tab1Content from "./components/tab1/Tab1Content";
import Tab2Content from "./components/tab2/Tab2Content";
import { v4 as uuidv4 } from "uuid";

function App() {
  const { channels, setChannels, setOpenChannel } = useContext(ChannelsContext);

  const handleAddChannel = () => {
    const newChannel = {
      id: uuidv4(),
      title: "Channel name",
      image: "https://picsum.photos/200",
      budgetFrequency: "Annually",
      baselineBudget: 12000,
      budgetAllocation: "Equal",
      budgetBreakdown: [
        {
          id: 1,
          month: "Jan",
          sum: 1000,
        },
        {
          id: 2,
          month: "Feb",
          sum: 1000,
        },
        {
          id: 3,
          month: "Mar",
          sum: 1000,
        },
        {
          id: 4,
          month: "Apr",
          sum: 1000,
        },
        {
          id: 5,
          month: "May",
          sum: 1000,
        },
        {
          id: 6,
          month: "Jun",
          sum: 1000,
        },
        {
          id: 7,
          month: "Jul",
          sum: 1000,
        },
        {
          id: 8,
          month: "Aug",
          sum: 1000,
        },
        {
          id: 9,
          month: "Sep",
          sum: 1000,
        },
        {
          id: 10,
          month: "Oct",
          sum: 1000,
        },
        {
          id: 11,
          month: "Nov",
          sum: 1000,
        },
        {
          id: 12,
          month: "Dec",
          sum: 1000,
        },
      ],
    };

    setOpenChannel("");
    setChannels([...channels, newChannel]);
  };

  return (
    <div className="App">
      <Headline handleAddChannel={handleAddChannel} />
      <TabsContent>
        <Tab1Content label={"Tab 1"} />
        <Tab2Content label={"Tab 2"} />
      </TabsContent>
    </div>
  );
}

export default App;
