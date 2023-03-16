type DrawerVO = {
    name: string
    iconType: string
    iconName: string
}

var items : DrawerVO[] = [
    {
        name:'Profile',
        iconType:'Material',
        iconName:'face-profile'
    },
    {
        name:'Settings',
        iconType:'Feather',
        iconName:'settings'
    },
    {
        name:'Saved Items',
        iconType:'Material',
        iconName:'bookmark-check-outline'
    },
    {
        name:'Refer a Friend!',
        iconType:'FontAwesome5',
        iconName:'user-friends'
    }
]

export default items;
