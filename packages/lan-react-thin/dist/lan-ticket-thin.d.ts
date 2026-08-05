import React from 'react';

export interface LanTicketThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketThin(props: LanTicketThinProps): React.ReactElement;
export default LanTicketThin;
