import React from 'react';

export interface BruSellcastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSellcast(props: BruSellcastProps): React.ReactElement;
export default BruSellcast;
