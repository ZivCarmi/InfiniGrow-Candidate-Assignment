import { useState, createContext } from "react";

export const ChannelsContext = createContext();

// Test channels
const sampleChannels = [
  {
    id: 1,
    title: "Paid reviews",
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
  },
  {
    id: 2,
    title: "Display ads - Google adwords",
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
  },
];

export const ChannelsProvider = ({ children }) => {
  const [channels, setChannels] = useState(
    sampleChannels ? sampleChannels : []
  );
  const [openChannel, setOpenChannel] = useState("");

  const handleChannelChange = (id, channel) => {
    const newChannels = [...channels];
    const index = newChannels.findIndex((c) => c.id === id);
    newChannels[index] = channel;
    setChannels(newChannels);
  };

  const handleChannelRemove = (id) => {
    setChannels(channels.filter((channel) => channel.id !== id));
  };

  return (
    <ChannelsContext.Provider
      value={{
        channels,
        setChannels,
        handleChannelChange,
        handleChannelRemove,
        openChannel,
        setOpenChannel,
      }}
    >
      {children}
    </ChannelsContext.Provider>
  );
};
