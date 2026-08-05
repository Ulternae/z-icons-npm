import React from 'react';

export interface LanMailboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailbox(props: LanMailboxProps): React.ReactElement;
export default LanMailbox;
