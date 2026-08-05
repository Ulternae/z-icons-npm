import React from 'react';

export interface LanCaretSquareDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretSquareDown(props: LanCaretSquareDownProps): React.ReactElement;
export default LanCaretSquareDown;
