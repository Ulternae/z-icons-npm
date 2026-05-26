import React from 'react';

export interface LanLightbulbSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbSolid: React.FC<LanLightbulbSolidProps>;
export default LanLightbulbSolid;
