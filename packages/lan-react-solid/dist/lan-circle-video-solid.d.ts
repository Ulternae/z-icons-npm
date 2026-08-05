import React from 'react';

export interface LanCircleVideoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleVideoSolid(props: LanCircleVideoSolidProps): React.ReactElement;
export default LanCircleVideoSolid;
