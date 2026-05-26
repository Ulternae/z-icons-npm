import React from 'react';

export interface LanReplyTimeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReplyTimeThin: React.FC<LanReplyTimeThinProps>;
export default LanReplyTimeThin;
