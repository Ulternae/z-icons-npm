import React from 'react';

export interface LanTurnRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurnRight(props: LanTurnRightProps): React.ReactElement;
export default LanTurnRight;
