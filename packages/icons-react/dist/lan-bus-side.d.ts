import React from 'react';

export interface LanBusSideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusSide: React.FC<LanBusSideProps>;
export default LanBusSide;
