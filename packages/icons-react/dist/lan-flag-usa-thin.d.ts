import React from 'react';

export interface LanFlagUsaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagUsaThin: React.FC<LanFlagUsaThinProps>;
export default LanFlagUsaThin;
