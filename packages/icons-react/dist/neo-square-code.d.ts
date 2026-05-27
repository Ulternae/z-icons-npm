import React from 'react';

export interface NeoSquareCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSquareCode: React.FC<NeoSquareCodeProps>;
export default NeoSquareCode;
