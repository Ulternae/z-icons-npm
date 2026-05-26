import React from 'react';

export interface LanAmpersandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAmpersand: React.FC<LanAmpersandProps>;
export default LanAmpersand;
