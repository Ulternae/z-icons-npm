import React from 'react';

export interface LanFileCaretUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCaretUpThin(props: LanFileCaretUpThinProps): React.ReactElement;
export default LanFileCaretUpThin;
