import React from 'react';

export interface LanMotorcycleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMotorcycleSolid(props: LanMotorcycleSolidProps): React.ReactElement;
export default LanMotorcycleSolid;
