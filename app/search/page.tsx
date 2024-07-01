'use client'

import { SearchPageProps } from "@/types/SearchPageProps";
import FoodTable from "@/components/Table/FoodTable";
import { BASE_URL } from "@/utils/constants";
import { useState, useEffect } from "react";

import { IFoodDetails, IFoodItem } from "@/types/FoodApiProps";
import TableFooter from "@/components/Table/TableFooter";


export default function SearchResults({ searchParams }: SearchPageProps) {
  const [formattedData, setFormattedData] = useState<IFoodItem[]>([]);
  const [nextPageURL, setNextPageURL] = useState<string | undefined>(undefined);
  useEffect(() => {
    try {
      const fetchData = async () => {
        console.log("fetched")
        const response = await fetch(
          `${BASE_URL}/api/edaman/food_database?q=${searchParams.q}&session=${searchParams?.session || 0}`
        );
        const data = await response.json();
        const formattedData: IFoodItem[] = data?.hints?.map(
          (foodItem: IFoodDetails) => {
            return {
              foodId: foodItem.food.foodId,
              label: foodItem.food.label,
              nutrients: foodItem.food.nutrients,
              foodContentsLabel: foodItem.food.foodContentsLabel,
            };
          }
        );
        setFormattedData(formattedData);
        setNextPageURL(data._links?.next?.href);
      };

      fetchData();

    } catch (error) {
      console.log(error)
    }
  }, [searchParams.session]);

  // const handleNext = async () => {
  //   console.log("handling next");
  // };

  // const handlePrevious = async () => {
  //   console.log("handling previous");
  // };

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-14 p-24">
      <FoodTable data={formattedData} />
      <TableFooter
      nextPage={nextPageURL}
      />

    </main>
  );
}
