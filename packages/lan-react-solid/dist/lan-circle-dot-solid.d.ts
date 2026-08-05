import React from 'react';

export interface LanCircleDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDotSolid(props: LanCircleDotSolidProps): React.ReactElement;
export default LanCircleDotSolid;
