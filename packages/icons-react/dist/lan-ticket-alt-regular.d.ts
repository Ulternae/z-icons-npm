import React from 'react';

export interface LanTicketAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketAltRegular: React.FC<LanTicketAltRegularProps>;
export default LanTicketAltRegular;
