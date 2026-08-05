import React from 'react';

export interface LanCircleFlorinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleFlorin(props: LanCircleFlorinProps): React.ReactElement;
export default LanCircleFlorin;
