import React from 'react';

export interface LanMailboxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailboxThin(props: LanMailboxThinProps): React.ReactElement;
export default LanMailboxThin;
