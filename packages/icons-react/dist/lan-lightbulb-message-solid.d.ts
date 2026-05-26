import React from 'react';

export interface LanLightbulbMessageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbMessageSolid: React.FC<LanLightbulbMessageSolidProps>;
export default LanLightbulbMessageSolid;
