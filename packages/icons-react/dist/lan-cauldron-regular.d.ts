import React from 'react';

export interface LanCauldronRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCauldronRegular: React.FC<LanCauldronRegularProps>;
export default LanCauldronRegular;
