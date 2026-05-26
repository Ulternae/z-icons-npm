import React from 'react';

export interface LanLightbulbRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbRegular: React.FC<LanLightbulbRegularProps>;
export default LanLightbulbRegular;
