import React from 'react';

export interface LanTicketPerforatedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketPerforated: React.FC<LanTicketPerforatedProps>;
export default LanTicketPerforated;
