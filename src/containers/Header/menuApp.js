export const adminMenu = [
    { //hệ thống, quản lý người dùng
        name: 'menu.admin.user-manage',
        menus: [
            { name: 'menu.admin.crud', link: '/system/user-manage' },
            { name: 'menu.admin.crud-redux', link: '/system/user-redux' },
            { name: 'menu.admin.manage-admin', link: '/system/user-admin' },
            { name: 'menu.admin.manage-doctor', link: '/system/user-doctor' },
        ]
    },
    { //hệ thống, quản lý phòng khám
        name: 'menu.admin.clinic',
        menus: [
            { name: 'menu.admin.manage-clinic', link: '/system/manage-clinic' },
        ]
    },
    { //hệ thống, quản lý chuyên khoa
        name: 'menu.admin.spec',
        menus: [
            { name: 'menu.admin.manage-spec', link: '/system/manage-spec' },
        ]
    },
    { //hệ thống, quản lý cẩm nang
        name: 'menu.admin.handbooks',
        menus: [
            { name: 'menu.admin.manage-handbooks', link: '/system/manage-handbooks' },
        ]
    },
    // { //hệ thống
    //     name: 'menu.system.header', menus: [
    //         {
    //             name: 'menu.system.system-administrator.header',
    //             subMenus: [
    //                 { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
    //                 { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
    //                 // { name: 'menu.system.system-administrator.register-package-group-or-account', link: '/system/register-package-group-or-account' },
    //             ]
    //         },
    //         // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    //     ]
    // },
];