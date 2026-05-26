import React from 'react';

export interface LanMailboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailbox: React.FC<LanMailboxProps>;
export default LanMailbox;
