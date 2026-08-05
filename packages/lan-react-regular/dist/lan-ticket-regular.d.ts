import React from 'react';

export interface LanTicketRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketRegular(props: LanTicketRegularProps): React.ReactElement;
export default LanTicketRegular;
