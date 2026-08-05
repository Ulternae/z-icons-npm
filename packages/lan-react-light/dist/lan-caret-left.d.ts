import React from 'react';

export interface LanCaretLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretLeft(props: LanCaretLeftProps): React.ReactElement;
export default LanCaretLeft;
