import React from 'react';

export interface LanXmarksLinesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXmarksLinesRegular(props: LanXmarksLinesRegularProps): React.ReactElement;
export default LanXmarksLinesRegular;
