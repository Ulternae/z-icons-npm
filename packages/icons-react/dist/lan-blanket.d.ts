import React from 'react';

export interface LanBlanketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlanket: React.FC<LanBlanketProps>;
export default LanBlanket;
