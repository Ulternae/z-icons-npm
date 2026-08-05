import React from 'react';

export interface LanTicketsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketsThin(props: LanTicketsThinProps): React.ReactElement;
export default LanTicketsThin;
