import React from 'react';

export interface LanCircleBookOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBookOpenSolid(props: LanCircleBookOpenSolidProps): React.ReactElement;
export default LanCircleBookOpenSolid;
