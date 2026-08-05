import React from 'react';

export interface MinaSixOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixOctagonSolid(props: MinaSixOctagonSolidProps): React.ReactElement;
export default MinaSixOctagonSolid;
