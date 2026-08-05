import React from 'react';

export interface LanDiamondHalfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamondHalfRegular(props: LanDiamondHalfRegularProps): React.ReactElement;
export default LanDiamondHalfRegular;
