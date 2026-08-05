import React from 'react';

export interface LanLassoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLassoThin(props: LanLassoThinProps): React.ReactElement;
export default LanLassoThin;
