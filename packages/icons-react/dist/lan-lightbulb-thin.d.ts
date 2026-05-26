import React from 'react';

export interface LanLightbulbThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbThin: React.FC<LanLightbulbThinProps>;
export default LanLightbulbThin;
