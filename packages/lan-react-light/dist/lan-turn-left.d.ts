import React from 'react';

export interface LanTurnLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurnLeft(props: LanTurnLeftProps): React.ReactElement;
export default LanTurnLeft;
