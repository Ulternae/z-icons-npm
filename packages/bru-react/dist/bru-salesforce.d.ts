import React from 'react';

export interface BruSalesforceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSalesforce(props: BruSalesforceProps): React.ReactElement;
export default BruSalesforce;
