import React from 'react';

export interface LanMailReplyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailReplyThin: React.FC<LanMailReplyThinProps>;
export default LanMailReplyThin;
