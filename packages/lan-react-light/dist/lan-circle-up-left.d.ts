import React from 'react';

export interface LanCircleUpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleUpLeft(props: LanCircleUpLeftProps): React.ReactElement;
export default LanCircleUpLeft;
