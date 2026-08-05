import React from 'react';

export interface LanBedBunkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedBunkSolid(props: LanBedBunkSolidProps): React.ReactElement;
export default LanBedBunkSolid;
