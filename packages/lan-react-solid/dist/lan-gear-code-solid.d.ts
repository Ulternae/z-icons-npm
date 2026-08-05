import React from 'react';

export interface LanGearCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearCodeSolid(props: LanGearCodeSolidProps): React.ReactElement;
export default LanGearCodeSolid;
