import React from 'react';

export interface LanCircleLitecoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLitecoin(props: LanCircleLitecoinProps): React.ReactElement;
export default LanCircleLitecoin;
