export const tablesFields = [
    {
        table: 'anexe_type',
        fields: [
            `business_id`,
            `name`,
            `description`
        ]
    },
    {
        table: 'branch_office',
        fields: [
            `business_id`,
            `name`,
            `city_id`,
            `address`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'branch_office_contacts',
        fields: [
            `branch_office_id`,
            `person_id`,
            `profile`,
            `created_by_user_id`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'business',
        fields: [
            `tipo_documento_id`,
            `document`,
            `verification_digit`,
            `business_name`,
            `city_id`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'city',
        fields: [
            `region_id`,
            `name`
        ]
    },
    {
        table: 'country',
        fields: [
            `name`
        ]
    },
    {
        table: 'customer',
        fields: [
            `business_id`,
            `document_type_id`,
            `document`,
            `verification_digit`,
            `customer_name`,
            `created_by_user_id`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'document_type',
        fields: [
            `name`,
            `abbreviation`
        ]
    },
    {
        table: 'evidence',
        fields: [
            `project_detail_id`,
            `image`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'license',
        fields: [
            `business_id`,
            `days`,
            `start`,
            `end`,
            `license_status`,
            `comments`,
            `register_date`
        ]
    },
    {
        table: 'person',
        fields: [
            `document_type_id`,
            `document`,
            `first_name`,
            `second_name`,
            `first_surname`,
            `second_surname`,
            `phone`,
            `email`,
            `city_id`,
            `verification_code`,
            `is_verified`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'point_sale',
        fields: [
            `business_id`,
            `city_id`,
            `code`,
            `name`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'product_service',
        fields: [
            `business_id`,
            `type`,
            `name`,
            `created_by_user_id`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'product_service_prices',
        fields: [
            `product_service_id`,
            `price`,
            `created_by_user_id`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'profile',
        fields: [
            `name`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'project',
        fields: [
            `branch_office_id`,
            `customer_id`,
            `created_by_user_id`,
            `start`,
            `end`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'project_anexes',
        fields: [
            `project_id`,
            `anexe_type_id`,
            `url`,
            `added_by_user_id`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'project_detail',
        fields: [
            `project_id`,
            `point_sale_id`,
            `product_service_id`,
            `quantity`,
            `unit_of_measurement_id`,
            `install_date`,
            `installed_by_user_id`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'project_visibility',
        fields: [
            `project_id`,
            `user_id`,
            `added_by_user_id`,
            `register_date`,
            `register_status`
        ]
    },
    {
        table: 'region',
        fields: [
            `country_id`,
            `name`
        ]
    },
    {
        table: 'unit_of_measurement',
        fields: [
            `name`,
            `abbreviation`
        ]
    },
    {
        table: 'user',
        fields: [
            `person_id`,
            `profile_id`,
            `username`,
            `password`,
            `image`,
            `branch_office_id`,
            `register_date`,
            `register_status`
        ]
    },

];