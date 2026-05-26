import React from 'react';

export interface LanVirusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVirusThin: React.FC<LanVirusThinProps>;
export default LanVirusThin;
