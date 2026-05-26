import React from 'react';

export interface LanKiteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKite: React.FC<LanKiteProps>;
export default LanKite;
