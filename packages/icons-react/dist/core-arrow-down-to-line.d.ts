import React from 'react';

export interface CoreArrowDownToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreArrowDownToLine: React.FC<CoreArrowDownToLineProps>;
export default CoreArrowDownToLine;
