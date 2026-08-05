import React from 'react';

export interface LanCaretLargeDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretLargeDown(props: LanCaretLargeDownProps): React.ReactElement;
export default LanCaretLargeDown;
