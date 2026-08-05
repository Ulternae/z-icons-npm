import React from 'react';

export interface LanCircleNotchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNotch(props: LanCircleNotchProps): React.ReactElement;
export default LanCircleNotch;
