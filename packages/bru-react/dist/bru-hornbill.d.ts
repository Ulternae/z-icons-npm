import React from 'react';

export interface BruHornbillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHornbill(props: BruHornbillProps): React.ReactElement;
export default BruHornbill;
