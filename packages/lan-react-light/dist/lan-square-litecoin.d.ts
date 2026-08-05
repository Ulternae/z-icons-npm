import React from 'react';

export interface LanSquareLitecoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLitecoin(props: LanSquareLitecoinProps): React.ReactElement;
export default LanSquareLitecoin;
