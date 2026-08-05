import React from 'react';

export interface LanBarnSiloSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarnSiloSolid(props: LanBarnSiloSolidProps): React.ReactElement;
export default LanBarnSiloSolid;
