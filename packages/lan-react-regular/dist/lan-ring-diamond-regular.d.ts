import React from 'react';

export interface LanRingDiamondRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRingDiamondRegular(props: LanRingDiamondRegularProps): React.ReactElement;
export default LanRingDiamondRegular;
