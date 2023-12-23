import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

interface IPropDropDown {
    setGroup: (value: string) => void;
    setOrder: (value: string) => void;
    order: string;
    group: string;
}

export default function DropDown(props: IPropDropDown) {
    const { setGroup, setOrder, group, order } = props;
    const [custom, setCustom] = useState<boolean>(false);

    return (
        <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                            Display
                            <ChevronDownIcon className="w-5 h-5 -mr-1 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items static className="absolute left-0 z-10 w-56 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item disabled>
                                    {({ active }) => (
                                        <p
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'px-4 py-2 text-sm flex justify-between items-center'
                                            )}
                                        >
                                            Grouping
                                            <select value={group} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setGroup(e.target.value)}>
                                                <option value={'priority'}>Priority</option>
                                                <option value={'status'}>Status</option>
                                                <option value={'user'}>User</option>
                                            </select>
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item disabled>
                                    {({ active }) => (
                                        <p
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'px-4 py-2 text-sm flex justify-between items-center'
                                            )}
                                        >
                                            Ordeing
                                            <select value={order} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setOrder(e.target.value)}>
                                                <option value={'priority'}>Priority</option>
                                                <option value={'title'}>Title</option>
                                            </select>
                                        </p>
                                    )}
                                </Menu.Item>

                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}

