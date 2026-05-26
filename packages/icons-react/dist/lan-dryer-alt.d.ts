import React from 'react';

export interface LanDryerAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDryerAlt: React.FC<LanDryerAltProps>;
export default LanDryerAlt;
