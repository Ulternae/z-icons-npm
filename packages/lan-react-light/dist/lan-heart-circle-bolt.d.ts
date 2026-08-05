import React from 'react';

export interface LanHeartCircleBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartCircleBolt(props: LanHeartCircleBoltProps): React.ReactElement;
export default LanHeartCircleBolt;
