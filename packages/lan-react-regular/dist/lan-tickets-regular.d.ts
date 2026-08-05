import React from 'react';

export interface LanTicketsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketsRegular(props: LanTicketsRegularProps): React.ReactElement;
export default LanTicketsRegular;
