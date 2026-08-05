import React from 'react';

export interface LanXmarksLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXmarksLines(props: LanXmarksLinesProps): React.ReactElement;
export default LanXmarksLines;
