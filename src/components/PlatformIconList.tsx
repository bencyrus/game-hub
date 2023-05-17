import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaLinux,
    FaApple,
    FaAndroid,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface PlatformIconListProps {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        mac: FaApple,
        web: BsGlobe,
    }

    return (
        <div>
            <HStack spacing={2} marginY={1}>
                {platforms.map((platform) => (
                    <Icon
                        as={iconMap[platform.slug]}
                        key={platform.id}
                        color="gray.500"
                    />
                ))}
            </HStack>
        </div>
    )
}

export default PlatformIconList
