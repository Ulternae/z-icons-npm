import React from 'react';

export interface MinaTicketSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTicketSlash(props: MinaTicketSlashProps): React.ReactElement;
export default MinaTicketSlash;
