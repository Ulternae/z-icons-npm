import React from 'react';

export interface LanCircleTengeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTenge(props: LanCircleTengeProps): React.ReactElement;
export default LanCircleTenge;
