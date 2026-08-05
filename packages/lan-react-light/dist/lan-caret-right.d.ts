import React from 'react';

export interface LanCaretRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretRight(props: LanCaretRightProps): React.ReactElement;
export default LanCaretRight;
