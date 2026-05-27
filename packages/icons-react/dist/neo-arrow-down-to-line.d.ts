import React from 'react';

export interface NeoArrowDownToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoArrowDownToLine: React.FC<NeoArrowDownToLineProps>;
export default NeoArrowDownToLine;
