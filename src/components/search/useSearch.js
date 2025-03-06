import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const fetchSearchResults = async (query) => {
  if (!query) return [];
  const res = await fetch(`/api/search?q=${query}`);
  return res.json();
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { data: results, refetch } = useQuery({
    queryKey: ["search", query],
    queryFn: () => fetchSearchResults(query),
    enabled: false,
  });

  useEffect(() => {
    if (query.length > 2) {
      refetch();
    }
  }, [query, refetch]);

  return (
    <div className="relative w-full max-w-lg">
      <div className="flex items-center border rounded-lg p-2 bg-white shadow-md">
        <Search className="text-gray-500" />
        <Input
          type="text"
          placeholder="Поиск товаров..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full outline-none px-2"
        />
        {query && (
          <X className="cursor-pointer text-gray-500" onClick={() => setQuery("")} />
        )}
      </div>
      {isFocused && results?.length > 0 && (
        <Card className="absolute w-full mt-2 bg-white shadow-lg rounded-lg p-2">
          {results.map((item, index) => (
            <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
              {item.name}
            </div>
          ))}
        </Card>
      )}
    </div>
  );
}
