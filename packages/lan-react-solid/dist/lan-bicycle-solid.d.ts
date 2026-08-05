import React from 'react';

export interface LanBicycleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBicycleSolid(props: LanBicycleSolidProps): React.ReactElement;
export default LanBicycleSolid;
