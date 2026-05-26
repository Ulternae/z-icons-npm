import React from 'react';

export interface LanGarlicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarlic: React.FC<LanGarlicProps>;
export default LanGarlic;
