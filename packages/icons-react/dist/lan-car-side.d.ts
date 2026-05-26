import React from 'react';

export interface LanCarSideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSide: React.FC<LanCarSideProps>;
export default LanCarSide;
