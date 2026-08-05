import React from 'react';

export interface LanTicketAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketAlt(props: LanTicketAltProps): React.ReactElement;
export default LanTicketAlt;
