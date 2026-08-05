import React from 'react';

export interface MinaSixOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixOctagon(props: MinaSixOctagonProps): React.ReactElement;
export default MinaSixOctagon;
