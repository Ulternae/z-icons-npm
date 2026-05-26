import React from 'react';

export interface LanHillRockslideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHillRockslide: React.FC<LanHillRockslideProps>;
export default LanHillRockslide;
