import React from 'react';

export interface LanMailboxFlagUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailboxFlagUp: React.FC<LanMailboxFlagUpProps>;
export default LanMailboxFlagUp;
