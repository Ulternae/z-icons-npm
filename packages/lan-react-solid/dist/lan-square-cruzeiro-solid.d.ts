import React from 'react';

export interface LanSquareCruzeiroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCruzeiroSolid(props: LanSquareCruzeiroSolidProps): React.ReactElement;
export default LanSquareCruzeiroSolid;
