import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const fetchSearchResults = async (query) => {
  if (!query) return [];
  const response = await fetch(`/api/search?q=${query}`);
  if (!response.ok) throw new Error("Ошибка загрузки данных");
  return response.json();
};

export const useSearch = (query) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => fetchSearchResults(query),
    enabled: !!query, // Запрос выполняется только при наличии запроса
    staleTime: 1000 * 60, // Кешируем на 1 минуту
  });
};
