import React from 'react';

export interface LanAngleRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleRight(props: LanAngleRightProps): React.ReactElement;
export default LanAngleRight;
