import React from 'react';

export interface LanCircleShekelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleShekelSolid(props: LanCircleShekelSolidProps): React.ReactElement;
export default LanCircleShekelSolid;
