import React from 'react';

export interface LanScooterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScooterSolid(props: LanScooterSolidProps): React.ReactElement;
export default LanScooterSolid;
