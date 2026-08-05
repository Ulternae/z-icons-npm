import React from 'react';

export interface LanBreadLoafSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBreadLoafSolid(props: LanBreadLoafSolidProps): React.ReactElement;
export default LanBreadLoafSolid;
