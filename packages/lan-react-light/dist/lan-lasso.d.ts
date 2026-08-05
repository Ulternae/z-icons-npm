import React from 'react';

export interface LanLassoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLasso(props: LanLassoProps): React.ReactElement;
export default LanLasso;
