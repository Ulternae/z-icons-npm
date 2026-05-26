import React from 'react';

export interface LanTentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTent: React.FC<LanTentProps>;
export default LanTent;
