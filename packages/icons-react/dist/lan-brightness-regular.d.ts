import React from 'react';

export interface LanBrightnessRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrightnessRegular: React.FC<LanBrightnessRegularProps>;
export default LanBrightnessRegular;
