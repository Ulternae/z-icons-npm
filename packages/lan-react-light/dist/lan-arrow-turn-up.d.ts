import React from 'react';

export interface LanArrowTurnUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowTurnUp(props: LanArrowTurnUpProps): React.ReactElement;
export default LanArrowTurnUp;
