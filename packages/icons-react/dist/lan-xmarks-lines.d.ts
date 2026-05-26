import React from 'react';

export interface LanXmarksLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXmarksLines: React.FC<LanXmarksLinesProps>;
export default LanXmarksLines;
