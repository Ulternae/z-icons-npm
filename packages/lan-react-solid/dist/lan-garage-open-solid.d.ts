import React from 'react';

export interface LanGarageOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageOpenSolid(props: LanGarageOpenSolidProps): React.ReactElement;
export default LanGarageOpenSolid;
