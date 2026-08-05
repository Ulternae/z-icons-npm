import React from 'react';

export interface LanBombSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBombSolid(props: LanBombSolidProps): React.ReactElement;
export default LanBombSolid;
