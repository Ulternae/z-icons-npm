import React from 'react';

export interface LanLightbulbOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbOn: React.FC<LanLightbulbOnProps>;
export default LanLightbulbOn;
