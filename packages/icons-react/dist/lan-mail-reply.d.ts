import React from 'react';

export interface LanMailReplyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailReply: React.FC<LanMailReplyProps>;
export default LanMailReply;
