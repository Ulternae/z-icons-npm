import React from 'react';

export interface LanBedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedSolid(props: LanBedSolidProps): React.ReactElement;
export default LanBedSolid;
