import React from 'react';

export interface LanReplyTimeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReplyTimeRegular: React.FC<LanReplyTimeRegularProps>;
export default LanReplyTimeRegular;
