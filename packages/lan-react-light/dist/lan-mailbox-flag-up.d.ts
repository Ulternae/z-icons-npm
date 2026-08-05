import React from 'react';

export interface LanMailboxFlagUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailboxFlagUp(props: LanMailboxFlagUpProps): React.ReactElement;
export default LanMailboxFlagUp;
