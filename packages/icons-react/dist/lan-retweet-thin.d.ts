import React from 'react';

export interface LanRetweetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRetweetThin: React.FC<LanRetweetThinProps>;
export default LanRetweetThin;
