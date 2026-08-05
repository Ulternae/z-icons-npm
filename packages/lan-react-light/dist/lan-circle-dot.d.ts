import React from 'react';

export interface LanCircleDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDot(props: LanCircleDotProps): React.ReactElement;
export default LanCircleDot;
