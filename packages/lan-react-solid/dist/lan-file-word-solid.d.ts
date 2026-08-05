import React from 'react';

export interface LanFileWordSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileWordSolid(props: LanFileWordSolidProps): React.ReactElement;
export default LanFileWordSolid;
