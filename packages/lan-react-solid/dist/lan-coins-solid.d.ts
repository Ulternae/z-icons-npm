import React from 'react';

export interface LanCoinsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinsSolid(props: LanCoinsSolidProps): React.ReactElement;
export default LanCoinsSolid;
