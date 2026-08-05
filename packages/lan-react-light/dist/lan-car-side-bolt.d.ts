import React from 'react';

export interface LanCarSideBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSideBolt(props: LanCarSideBoltProps): React.ReactElement;
export default LanCarSideBolt;
