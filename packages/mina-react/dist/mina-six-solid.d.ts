import React from 'react';

export interface MinaSixSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixSolid(props: MinaSixSolidProps): React.ReactElement;
export default MinaSixSolid;
