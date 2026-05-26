import React from 'react';

export interface LanLightbulbOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbOnRegular: React.FC<LanLightbulbOnRegularProps>;
export default LanLightbulbOnRegular;
