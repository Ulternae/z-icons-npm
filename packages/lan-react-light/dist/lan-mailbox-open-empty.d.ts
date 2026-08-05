import React from 'react';

export interface LanMailboxOpenEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailboxOpenEmpty(props: LanMailboxOpenEmptyProps): React.ReactElement;
export default LanMailboxOpenEmpty;
