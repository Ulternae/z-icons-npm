import React from 'react';

export interface LanCoinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinSolid(props: LanCoinSolidProps): React.ReactElement;
export default LanCoinSolid;
