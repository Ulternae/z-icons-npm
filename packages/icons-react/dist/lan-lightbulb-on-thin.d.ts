import React from 'react';

export interface LanLightbulbOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbOnThin: React.FC<LanLightbulbOnThinProps>;
export default LanLightbulbOnThin;
