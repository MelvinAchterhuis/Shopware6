<?php

namespace Kiener\MolliePayments\Handler\Method;

use Kiener\MolliePayments\Handler\PaymentHandler;
use Mollie\Api\Types\PaymentMethod;
use Shopware\Core\Checkout\Customer\CustomerEntity;
use Shopware\Core\Checkout\Order\OrderEntity;
use Shopware\Core\System\SalesChannel\SalesChannelContext;

class DirectDebitPayment extends PaymentHandler
{

    public const PAYMENT_METHOD_NAME = PaymentMethod::DIRECTDEBIT;
    public const PAYMENT_METHOD_DESCRIPTION = 'SEPA Direct Debit';

    /**
     * @var string
     */
    protected $paymentMethod = self::PAYMENT_METHOD_NAME;


    /**
     * @param array $orderData
     * @param OrderEntity $orderEntity
     * @param SalesChannelContext $salesChannelContext
     * @param CustomerEntity $customer
     * @return array
     */
    public function processPaymentMethodSpecificParameters(array $orderData, OrderEntity $orderEntity, SalesChannelContext $salesChannelContext, CustomerEntity $customer): array
    {
        return $orderData;
    }

}
