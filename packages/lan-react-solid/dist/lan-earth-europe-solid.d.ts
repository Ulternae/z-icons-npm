import React from 'react';

export interface LanEarthEuropeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthEuropeSolid(props: LanEarthEuropeSolidProps): React.ReactElement;
export default LanEarthEuropeSolid;
