import React from 'react';

export interface LanMailboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailboxSolid(props: LanMailboxSolidProps): React.ReactElement;
export default LanMailboxSolid;
