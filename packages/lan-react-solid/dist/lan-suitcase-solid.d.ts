import React from 'react';

export interface LanSuitcaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuitcaseSolid(props: LanSuitcaseSolidProps): React.ReactElement;
export default LanSuitcaseSolid;
