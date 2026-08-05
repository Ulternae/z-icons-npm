import React from 'react';

export interface LanCircleBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBolt(props: LanCircleBoltProps): React.ReactElement;
export default LanCircleBolt;
