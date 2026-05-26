import React from 'react';

export interface LanVialProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVial: React.FC<LanVialProps>;
export default LanVial;
