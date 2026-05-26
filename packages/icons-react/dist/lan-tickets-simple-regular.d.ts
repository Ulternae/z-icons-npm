import React from 'react';

export interface LanTicketsSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketsSimpleRegular: React.FC<LanTicketsSimpleRegularProps>;
export default LanTicketsSimpleRegular;
