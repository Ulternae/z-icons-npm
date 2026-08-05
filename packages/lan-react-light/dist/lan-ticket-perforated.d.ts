import React from 'react';

export interface LanTicketPerforatedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketPerforated(props: LanTicketPerforatedProps): React.ReactElement;
export default LanTicketPerforated;
