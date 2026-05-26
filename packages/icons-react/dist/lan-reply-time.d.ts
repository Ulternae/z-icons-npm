import React from 'react';

export interface LanReplyTimeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReplyTime: React.FC<LanReplyTimeProps>;
export default LanReplyTime;
