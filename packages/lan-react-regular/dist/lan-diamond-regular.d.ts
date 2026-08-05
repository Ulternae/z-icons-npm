import React from 'react';

export interface LanDiamondRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamondRegular(props: LanDiamondRegularProps): React.ReactElement;
export default LanDiamondRegular;
