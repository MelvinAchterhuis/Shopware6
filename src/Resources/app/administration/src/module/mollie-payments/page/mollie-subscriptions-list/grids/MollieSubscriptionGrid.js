// eslint-disable-next-line no-undef
const {Application} = Shopware;

export default class MollieSubscriptionGrid {

    /**
     *
     * @returns {[{property: string, label: string, align: string},{property: string, label: string, align: string},{property: string, width: string, label: string, align: string},{property: string, width: string, label: string, align: string},{property: string, width: string, label: string, align: string},null,null,null,null,null]}
     */
    buildColumns() {

        const app = Application.getApplicationRoot();

        if (!app) {
            return [];
        }

        return [
            {
                property: 'createdAt',
                label: app.$tc('mollie-payments.subscriptions.list.columns.createdAt'),
                allowResize: true,
            },
            {
                property: 'customerId',
                label: app.$tc('mollie-payments.subscriptions.list.columns.customer'),
                allowResize: true,
            },
            {
                property: 'description',
                label: app.$tc('mollie-payments.subscriptions.list.columns.description'),
                allowResize: true,
            },
            {
                property: 'mollieStatus',
                label: app.$tc('mollie-payments.subscriptions.list.columns.status'),
                allowResize: true,
                sortable: false, // this data doesnt really existin in the database, so sorting would throw an error
            },
            {
                property: 'quantity',
                label: app.$tc('mollie-payments.subscriptions.list.columns.quantity'),
                allowResize: true,
                align: 'center',
            },
            {
                property: 'amount',
                label: app.$tc('mollie-payments.subscriptions.list.columns.amount'),
                allowResize: true,
                align: 'right',
            },
            {
                property: 'nextPaymentAt',
                label: app.$tc('mollie-payments.subscriptions.list.columns.nextPaymentAt'),
                allowResize: true,
            },
            {
                property: 'lastRemindedAt',
                label: app.$tc('mollie-payments.subscriptions.list.columns.prePaymentReminder'),
                allowResize: true,
            },
            {
                property: 'canceledAt',
                dataIndex: 'canceledAt',
                label: app.$tc('mollie-payments.subscriptions.list.columns.canceledAt'),
                visible: true,
            },
            {
                property: 'mollieId',
                dataIndex: 'mollieId',
                label: app.$tc('mollie-payments.subscriptions.list.columns.subscription_id'),
                allowResize: true,
            },
            {
                property: 'mollieCustomerId',
                dataIndex: 'mollieCustomerId',
                label: app.$tc('mollie-payments.subscriptions.list.columns.customer_id'),
                allowResize: true,
            },
            {
                property: 'id',
                dataIndex: 'id',
                label: 'Id',
                allowResize: true,
            },
        ];
    }

}
