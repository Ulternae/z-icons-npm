import React from 'react';

export interface BruSalesforceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSalesforce: React.FC<BruSalesforceProps>;
export default BruSalesforce;
