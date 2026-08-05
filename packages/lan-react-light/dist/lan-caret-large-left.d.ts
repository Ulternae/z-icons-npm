import React from 'react';

export interface LanCaretLargeLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretLargeLeft(props: LanCaretLargeLeftProps): React.ReactElement;
export default LanCaretLargeLeft;
