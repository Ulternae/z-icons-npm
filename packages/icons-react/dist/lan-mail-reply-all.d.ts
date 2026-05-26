import React from 'react';

export interface LanMailReplyAllProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailReplyAll: React.FC<LanMailReplyAllProps>;
export default LanMailReplyAll;
