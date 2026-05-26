import React from 'react';

export interface LanLightbulbOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbOnSolid: React.FC<LanLightbulbOnSolidProps>;
export default LanLightbulbOnSolid;
