import React from 'react';

export interface LanTicketsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketsThin: React.FC<LanTicketsThinProps>;
export default LanTicketsThin;
