import React from 'react';

export interface LanLightbulbGearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbGear: React.FC<LanLightbulbGearProps>;
export default LanLightbulbGear;
