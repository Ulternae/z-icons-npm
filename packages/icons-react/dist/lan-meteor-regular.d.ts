import React from 'react';

export interface LanMeteorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeteorRegular: React.FC<LanMeteorRegularProps>;
export default LanMeteorRegular;
