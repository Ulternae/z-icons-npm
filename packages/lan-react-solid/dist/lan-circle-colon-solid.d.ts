import React from 'react';

export interface LanCircleColonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleColonSolid(props: LanCircleColonSolidProps): React.ReactElement;
export default LanCircleColonSolid;
