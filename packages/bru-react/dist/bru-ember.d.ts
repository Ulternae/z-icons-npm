import React from 'react';

export interface BruEmberProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruEmber(props: BruEmberProps): React.ReactElement;
export default BruEmber;
