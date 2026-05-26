import React from 'react';

export interface LanSquareVirusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareVirusThin: React.FC<LanSquareVirusThinProps>;
export default LanSquareVirusThin;
