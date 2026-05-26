import React from 'react';

export interface LanPersonSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSimple: React.FC<LanPersonSimpleProps>;
export default LanPersonSimple;
