import React from 'react';

export interface LanBurstSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurstSolid(props: LanBurstSolidProps): React.ReactElement;
export default LanBurstSolid;
