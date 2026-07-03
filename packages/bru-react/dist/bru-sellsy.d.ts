import React from 'react';

export interface BruSellsyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSellsy(props: BruSellsyProps): React.ReactElement;
export default BruSellsy;
