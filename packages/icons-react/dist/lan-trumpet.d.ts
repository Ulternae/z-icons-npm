import React from 'react';

export interface LanTrumpetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrumpet: React.FC<LanTrumpetProps>;
export default LanTrumpet;
