import React from 'react';

export interface LanHandShakaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandShaka: React.FC<LanHandShakaProps>;
export default LanHandShaka;
