import React from 'react';

export interface LanBracketsSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBracketsSquareSolid(props: LanBracketsSquareSolidProps): React.ReactElement;
export default LanBracketsSquareSolid;
