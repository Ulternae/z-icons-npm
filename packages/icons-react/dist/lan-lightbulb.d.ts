import React from 'react';

export interface LanLightbulbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulb: React.FC<LanLightbulbProps>;
export default LanLightbulb;
