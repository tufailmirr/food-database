import React from 'react';

interface FoodItem {
    foodId: string;
    label: string;
    nutrients: Record<string, string>
    foodContentsLabel: string
}

interface FoodTableProps {
    data: FoodItem[];
}

const FoodTable: React.FC<FoodTableProps> = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Label</th>
                    <th>Protein (g)</th>
                    <th>Fat (g)</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item, index) => (
                    <tr key={item.foodId + index}>
                        <td>{item.label}</td>
                        {/* <td>{item.brand}</td> */}
                        <td>{item.nutrients.ENERC_KCAL}</td>
                        <td>{item.nutrients.FAT}</td>
                        <td className='flex flex-wrap gap-3'>{}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FoodTable;
