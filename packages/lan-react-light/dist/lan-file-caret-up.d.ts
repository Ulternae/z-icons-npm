import React from 'react';

export interface LanFileCaretUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCaretUp(props: LanFileCaretUpProps): React.ReactElement;
export default LanFileCaretUp;
