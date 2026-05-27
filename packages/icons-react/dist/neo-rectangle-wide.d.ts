import React from 'react';

export interface NeoRectangleWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoRectangleWide: React.FC<NeoRectangleWideProps>;
export default NeoRectangleWide;
