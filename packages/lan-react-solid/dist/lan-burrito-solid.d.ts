import React from 'react';

export interface LanBurritoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurritoSolid(props: LanBurritoSolidProps): React.ReactElement;
export default LanBurritoSolid;
