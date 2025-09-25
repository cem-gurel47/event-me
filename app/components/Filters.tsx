import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "~/components/ui/select";
import { useStore } from "~/store/store";

type Props = {};

export function Filters(props: Props) {
  const { sortBy, setSortBy, category, setCategory } = useStore();

  return (
    <div className="w-full h-full gap-4 grid grid-cols-8 rounded-2xl">
      <Select value={category} onValueChange={setCategory}>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectTrigger className="col-span-1 w-full">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Sports">Sports</SelectItem>
            <SelectItem value="Music">Music</SelectItem>
            <SelectItem value="Art">Art</SelectItem>
            <SelectItem value="Food">Food</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </SelectGroup>
      </Select>
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          <SelectTrigger className="col-span-1 w-full">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="low-to-high">Price: Low to High</SelectItem>
            <SelectItem value="high-to-low">Price: High to Low</SelectItem>
            <SelectItem value="newest">Time: Earliest</SelectItem>
            <SelectItem value="oldest">Time: Latest</SelectItem>
            <SelectItem value="distance-closest">Distance: Closest</SelectItem>
            <SelectItem value="distance-furthest">
              Distance: Furthest
            </SelectItem>
          </SelectContent>
        </SelectGroup>
      </Select>
    </div>
  );
}

export default Filters;
