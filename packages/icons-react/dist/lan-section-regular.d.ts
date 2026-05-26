import React from 'react';

export interface LanSectionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSectionRegular: React.FC<LanSectionRegularProps>;
export default LanSectionRegular;
