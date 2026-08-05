import React from 'react';

export interface LanUtilityCanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUtilityCanSolid(props: LanUtilityCanSolidProps): React.ReactElement;
export default LanUtilityCanSolid;
