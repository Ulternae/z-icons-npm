import React from 'react';

export interface LanTarpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTarp: React.FC<LanTarpProps>;
export default LanTarp;
