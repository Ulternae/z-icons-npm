import React from 'react';

export interface LanCirclePesoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePesoSolid(props: LanCirclePesoSolidProps): React.ReactElement;
export default LanCirclePesoSolid;
