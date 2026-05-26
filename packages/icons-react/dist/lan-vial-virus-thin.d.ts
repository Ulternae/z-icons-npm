import React from 'react';

export interface LanVialVirusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialVirusThin: React.FC<LanVialVirusThinProps>;
export default LanVialVirusThin;
