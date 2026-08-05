import React from 'react';

export interface LanChildRifleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildRifleSolid(props: LanChildRifleSolidProps): React.ReactElement;
export default LanChildRifleSolid;
