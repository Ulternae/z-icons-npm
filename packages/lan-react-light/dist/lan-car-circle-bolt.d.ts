import React from 'react';

export interface LanCarCircleBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarCircleBolt(props: LanCarCircleBoltProps): React.ReactElement;
export default LanCarCircleBolt;
