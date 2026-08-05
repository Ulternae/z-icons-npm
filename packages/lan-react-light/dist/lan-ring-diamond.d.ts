import React from 'react';

export interface LanRingDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRingDiamond(props: LanRingDiamondProps): React.ReactElement;
export default LanRingDiamond;
