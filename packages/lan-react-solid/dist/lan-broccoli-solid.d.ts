import React from 'react';

export interface LanBroccoliSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroccoliSolid(props: LanBroccoliSolidProps): React.ReactElement;
export default LanBroccoliSolid;
