import React from 'react';

export interface LanBellOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellOnSolid(props: LanBellOnSolidProps): React.ReactElement;
export default LanBellOnSolid;
