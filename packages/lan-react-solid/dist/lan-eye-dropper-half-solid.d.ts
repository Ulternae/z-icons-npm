import React from 'react';

export interface LanEyeDropperHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeDropperHalfSolid(props: LanEyeDropperHalfSolidProps): React.ReactElement;
export default LanEyeDropperHalfSolid;
