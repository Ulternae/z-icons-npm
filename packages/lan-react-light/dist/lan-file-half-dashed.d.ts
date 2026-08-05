import React from 'react';

export interface LanFileHalfDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileHalfDashed(props: LanFileHalfDashedProps): React.ReactElement;
export default LanFileHalfDashed;
