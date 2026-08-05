import React from 'react';

export interface LanInhalerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInhalerSolid(props: LanInhalerSolidProps): React.ReactElement;
export default LanInhalerSolid;
