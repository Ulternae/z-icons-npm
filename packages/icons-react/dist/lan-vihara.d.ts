import React from 'react';

export interface LanViharaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVihara: React.FC<LanViharaProps>;
export default LanVihara;
