import React from 'react';

export interface LanBellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellSolid(props: LanBellSolidProps): React.ReactElement;
export default LanBellSolid;
