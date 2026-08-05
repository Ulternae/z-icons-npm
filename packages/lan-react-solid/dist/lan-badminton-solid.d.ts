import React from 'react';

export interface LanBadmintonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadmintonSolid(props: LanBadmintonSolidProps): React.ReactElement;
export default LanBadmintonSolid;
