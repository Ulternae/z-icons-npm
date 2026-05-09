import React from 'react';

export interface MinaTicketSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTicketSlash: React.FC<MinaTicketSlashProps>;
export default MinaTicketSlash;
