import React from 'react';

export interface LanRectangleWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleWide: React.FC<LanRectangleWideProps>;
export default LanRectangleWide;
