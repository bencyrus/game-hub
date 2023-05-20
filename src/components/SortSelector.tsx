import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface SortSelectorProps {
    onSelectSortOrder: (sortOrder: string) => void
    sortOrder: string | undefined
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: SortSelectorProps) => {
    const sortOrders = [
        { value: '', label: 'Relavance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ]

    const currentSortOrder = sortOrders.find(
        (order) => order.value === sortOrder,
    )

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder?.label || 'Relavance'}
            </MenuButton>

            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem
                        key={order.value}
                        onClick={() => onSelectSortOrder(order.value)}
                    >
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default SortSelector
