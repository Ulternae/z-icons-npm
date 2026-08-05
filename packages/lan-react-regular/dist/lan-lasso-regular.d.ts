import React from 'react';

export interface LanLassoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLassoRegular(props: LanLassoRegularProps): React.ReactElement;
export default LanLassoRegular;
