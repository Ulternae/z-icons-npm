import React from 'react';

export interface LanCompassRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompassRegular: React.FC<LanCompassRegularProps>;
export default LanCompassRegular;
