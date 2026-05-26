import React from 'react';

export interface LanMailboxOpenEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailboxOpenEmpty: React.FC<LanMailboxOpenEmptyProps>;
export default LanMailboxOpenEmpty;
