import React from 'react';

export interface LanAlignCenterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignCenterRegular: React.FC<LanAlignCenterRegularProps>;
export default LanAlignCenterRegular;
