import React from 'react';

export interface LanGavelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGavelSolid(props: LanGavelSolidProps): React.ReactElement;
export default LanGavelSolid;
