import React from 'react';

export interface LanBarnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarnSolid(props: LanBarnSolidProps): React.ReactElement;
export default LanBarnSolid;
