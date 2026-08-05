import React from 'react';

export interface LanPlugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugSolid(props: LanPlugSolidProps): React.ReactElement;
export default LanPlugSolid;
