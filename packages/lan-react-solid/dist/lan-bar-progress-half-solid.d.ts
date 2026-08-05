import React from 'react';

export interface LanBarProgressHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressHalfSolid(props: LanBarProgressHalfSolidProps): React.ReactElement;
export default LanBarProgressHalfSolid;
