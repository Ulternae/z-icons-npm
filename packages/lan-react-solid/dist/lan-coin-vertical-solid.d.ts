import React from 'react';

export interface LanCoinVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinVerticalSolid(props: LanCoinVerticalSolidProps): React.ReactElement;
export default LanCoinVerticalSolid;
