import { IFoodItem } from '@/types/FoodApiProps';
import React from 'react';


interface FoodTableProps {
    data: IFoodItem[];
}

const FoodTable: React.FC<FoodTableProps> = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className="border border-black p-5">Label</th>
                    <th className="border border-black p-5">Protein (g)</th>
                    <th className="border border-black p-5">Fat (g)</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item, index) => (
                    <tr key={item.foodId + index}>
                        <td className="border border-black p-5">{item.label}</td>
                        {/* <td>{item.brand}</td> */}
                        <td className="border border-black p-5">{item.nutrients.ENERC_KCAL}</td>
                        <td className="border border-black p-5">{item.nutrients.FAT}</td>
                        {/* <td className='flex flex-wrap gap-3'>{}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FoodTable;
