import React from 'react';

export interface LanArrowTurnDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowTurnDown(props: LanArrowTurnDownProps): React.ReactElement;
export default LanArrowTurnDown;
