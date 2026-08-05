import React from 'react';

export interface LanTicketAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketAltThin(props: LanTicketAltThinProps): React.ReactElement;
export default LanTicketAltThin;
