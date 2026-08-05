import React from 'react';

export interface LanCircleCruzeiroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCruzeiroSolid(props: LanCircleCruzeiroSolidProps): React.ReactElement;
export default LanCircleCruzeiroSolid;
