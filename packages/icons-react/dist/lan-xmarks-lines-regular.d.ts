import React from 'react';

export interface LanXmarksLinesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXmarksLinesRegular: React.FC<LanXmarksLinesRegularProps>;
export default LanXmarksLinesRegular;
