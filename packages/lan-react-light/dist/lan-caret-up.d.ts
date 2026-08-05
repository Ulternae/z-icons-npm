import React from 'react';

export interface LanCaretUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretUp(props: LanCaretUpProps): React.ReactElement;
export default LanCaretUp;
