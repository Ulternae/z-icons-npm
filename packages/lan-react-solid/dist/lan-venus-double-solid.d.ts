import React from 'react';

export interface LanVenusDoubleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVenusDoubleSolid(props: LanVenusDoubleSolidProps): React.ReactElement;
export default LanVenusDoubleSolid;
