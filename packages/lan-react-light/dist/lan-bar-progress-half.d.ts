import React from 'react';

export interface LanBarProgressHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressHalf(props: LanBarProgressHalfProps): React.ReactElement;
export default LanBarProgressHalf;
