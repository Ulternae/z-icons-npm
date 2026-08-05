import React from 'react';

export interface LanMailboxOpenLetterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailboxOpenLetter(props: LanMailboxOpenLetterProps): React.ReactElement;
export default LanMailboxOpenLetter;
