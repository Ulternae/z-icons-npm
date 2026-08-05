import React from 'react';

export interface LanSquarePesoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePesoSolid(props: LanSquarePesoSolidProps): React.ReactElement;
export default LanSquarePesoSolid;
