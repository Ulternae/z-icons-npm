import React from 'react';

export interface LanCircleKipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleKipSolid(props: LanCircleKipSolidProps): React.ReactElement;
export default LanCircleKipSolid;
