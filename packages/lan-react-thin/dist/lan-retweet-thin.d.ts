import React from 'react';

export interface LanRetweetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRetweetThin(props: LanRetweetThinProps): React.ReactElement;
export default LanRetweetThin;
