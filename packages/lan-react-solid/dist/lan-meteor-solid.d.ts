import React from 'react';

export interface LanMeteorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeteorSolid(props: LanMeteorSolidProps): React.ReactElement;
export default LanMeteorSolid;
