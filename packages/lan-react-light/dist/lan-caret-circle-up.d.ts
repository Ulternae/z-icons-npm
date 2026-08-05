import React from 'react';

export interface LanCaretCircleUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretCircleUp(props: LanCaretCircleUpProps): React.ReactElement;
export default LanCaretCircleUp;
