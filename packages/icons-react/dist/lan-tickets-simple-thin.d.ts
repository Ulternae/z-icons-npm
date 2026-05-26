import React from 'react';

export interface LanTicketsSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketsSimpleThin: React.FC<LanTicketsSimpleThinProps>;
export default LanTicketsSimpleThin;
