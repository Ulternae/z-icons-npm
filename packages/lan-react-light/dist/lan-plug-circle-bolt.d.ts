import React from 'react';

export interface LanPlugCircleBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCircleBolt(props: LanPlugCircleBoltProps): React.ReactElement;
export default LanPlugCircleBolt;
