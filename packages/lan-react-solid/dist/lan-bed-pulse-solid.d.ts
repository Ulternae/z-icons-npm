import React from 'react';

export interface LanBedPulseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedPulseSolid(props: LanBedPulseSolidProps): React.ReactElement;
export default LanBedPulseSolid;
