import React from 'react';

export interface LanFaceDiagonalMouthProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDiagonalMouth(props: LanFaceDiagonalMouthProps): React.ReactElement;
export default LanFaceDiagonalMouth;
