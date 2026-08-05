import React from 'react';

export interface LanCaretUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretUpThin(props: LanCaretUpThinProps): React.ReactElement;
export default LanCaretUpThin;
