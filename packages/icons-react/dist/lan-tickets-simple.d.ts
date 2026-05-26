import React from 'react';

export interface LanTicketsSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketsSimple: React.FC<LanTicketsSimpleProps>;
export default LanTicketsSimple;
