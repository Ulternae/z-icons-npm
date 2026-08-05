import React from 'react';

export interface LanBarProgressHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressHalfThin(props: LanBarProgressHalfThinProps): React.ReactElement;
export default LanBarProgressHalfThin;
