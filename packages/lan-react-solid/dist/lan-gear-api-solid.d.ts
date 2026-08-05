import React from 'react';

export interface LanGearApiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearApiSolid(props: LanGearApiSolidProps): React.ReactElement;
export default LanGearApiSolid;
