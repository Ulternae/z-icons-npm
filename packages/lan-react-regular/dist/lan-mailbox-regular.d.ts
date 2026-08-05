import React from 'react';

export interface LanMailboxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailboxRegular(props: LanMailboxRegularProps): React.ReactElement;
export default LanMailboxRegular;
