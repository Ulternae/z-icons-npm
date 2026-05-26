import React from 'react';

export interface LanFlagUsaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagUsa: React.FC<LanFlagUsaProps>;
export default LanFlagUsa;
