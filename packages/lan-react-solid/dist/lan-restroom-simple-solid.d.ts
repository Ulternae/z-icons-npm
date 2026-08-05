import React from 'react';

export interface LanRestroomSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRestroomSimpleSolid(props: LanRestroomSimpleSolidProps): React.ReactElement;
export default LanRestroomSimpleSolid;
