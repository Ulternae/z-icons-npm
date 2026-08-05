import React from 'react';

export interface LanCircleTengeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTengeSolid(props: LanCircleTengeSolidProps): React.ReactElement;
export default LanCircleTengeSolid;
