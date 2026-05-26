import React from 'react';

export interface LanMugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugRegular: React.FC<LanMugRegularProps>;
export default LanMugRegular;
