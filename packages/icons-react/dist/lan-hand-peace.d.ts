import React from 'react';

export interface LanHandPeaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPeace: React.FC<LanHandPeaceProps>;
export default LanHandPeace;
