import React from 'react';

export interface LanTicketsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketsRegular: React.FC<LanTicketsRegularProps>;
export default LanTicketsRegular;
