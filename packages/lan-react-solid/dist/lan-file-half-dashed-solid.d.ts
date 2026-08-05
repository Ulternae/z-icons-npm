import React from 'react';

export interface LanFileHalfDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileHalfDashedSolid(props: LanFileHalfDashedSolidProps): React.ReactElement;
export default LanFileHalfDashedSolid;
