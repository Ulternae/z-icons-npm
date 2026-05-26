import React from 'react';

export interface LanMailboxOpenLetterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailboxOpenLetter: React.FC<LanMailboxOpenLetterProps>;
export default LanMailboxOpenLetter;
