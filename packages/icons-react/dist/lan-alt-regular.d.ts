import React from 'react';

export interface LanAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAltRegular: React.FC<LanAltRegularProps>;
export default LanAltRegular;
