import React from 'react';

export interface LanTromboneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrombone: React.FC<LanTromboneProps>;
export default LanTrombone;
