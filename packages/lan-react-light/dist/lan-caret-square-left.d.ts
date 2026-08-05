import React from 'react';

export interface LanCaretSquareLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretSquareLeft(props: LanCaretSquareLeftProps): React.ReactElement;
export default LanCaretSquareLeft;
