import React from 'react';

export interface LanHeadSideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSide: React.FC<LanHeadSideProps>;
export default LanHeadSide;
