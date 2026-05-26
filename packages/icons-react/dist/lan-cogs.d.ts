import React from 'react';

export interface LanCogsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCogs: React.FC<LanCogsProps>;
export default LanCogs;
