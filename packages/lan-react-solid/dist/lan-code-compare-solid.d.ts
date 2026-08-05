import React from 'react';

export interface LanCodeCompareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeCompareSolid(props: LanCodeCompareSolidProps): React.ReactElement;
export default LanCodeCompareSolid;
