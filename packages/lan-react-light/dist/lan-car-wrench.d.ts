import React from 'react';

export interface LanCarWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarWrench(props: LanCarWrenchProps): React.ReactElement;
export default LanCarWrench;
