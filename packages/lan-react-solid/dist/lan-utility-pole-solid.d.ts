import React from 'react';

export interface LanUtilityPoleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUtilityPoleSolid(props: LanUtilityPoleSolidProps): React.ReactElement;
export default LanUtilityPoleSolid;
