import React from 'react';

export interface LanMailboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailboxSolid: React.FC<LanMailboxSolidProps>;
export default LanMailboxSolid;
