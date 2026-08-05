import React from 'react';

export interface LanCaretLargeUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretLargeUp(props: LanCaretLargeUpProps): React.ReactElement;
export default LanCaretLargeUp;
