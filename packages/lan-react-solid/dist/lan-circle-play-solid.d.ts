import React from 'react';

export interface LanCirclePlaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePlaySolid(props: LanCirclePlaySolidProps): React.ReactElement;
export default LanCirclePlaySolid;
