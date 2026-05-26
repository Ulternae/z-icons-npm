import React from 'react';

export interface LanMailboxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailboxThin: React.FC<LanMailboxThinProps>;
export default LanMailboxThin;
