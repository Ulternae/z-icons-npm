import React from 'react';

export interface LanCircleYenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleYenSolid(props: LanCircleYenSolidProps): React.ReactElement;
export default LanCircleYenSolid;
