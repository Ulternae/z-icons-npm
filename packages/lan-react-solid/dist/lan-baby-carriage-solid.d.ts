import React from 'react';

export interface LanBabyCarriageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBabyCarriageSolid(props: LanBabyCarriageSolidProps): React.ReactElement;
export default LanBabyCarriageSolid;
