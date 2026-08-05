import React from 'react';

export interface LanCircleYProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleY(props: LanCircleYProps): React.ReactElement;
export default LanCircleY;
