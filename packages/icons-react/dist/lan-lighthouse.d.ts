import React from 'react';

export interface LanLighthouseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLighthouse: React.FC<LanLighthouseProps>;
export default LanLighthouse;
