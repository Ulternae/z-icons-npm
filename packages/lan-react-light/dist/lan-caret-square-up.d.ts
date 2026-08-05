import React from 'react';

export interface LanCaretSquareUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretSquareUp(props: LanCaretSquareUpProps): React.ReactElement;
export default LanCaretSquareUp;
