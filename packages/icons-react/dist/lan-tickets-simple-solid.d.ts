import React from 'react';

export interface LanTicketsSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketsSimpleSolid: React.FC<LanTicketsSimpleSolidProps>;
export default LanTicketsSimpleSolid;
