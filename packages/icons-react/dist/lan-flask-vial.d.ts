import React from 'react';

export interface LanFlaskVialProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskVial: React.FC<LanFlaskVialProps>;
export default LanFlaskVial;
