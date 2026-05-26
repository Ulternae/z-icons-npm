import React from 'react';

export interface LanAlignJustifyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignJustifyRegular: React.FC<LanAlignJustifyRegularProps>;
export default LanAlignJustifyRegular;
