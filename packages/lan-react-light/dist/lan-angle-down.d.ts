import React from 'react';

export interface LanAngleDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleDown(props: LanAngleDownProps): React.ReactElement;
export default LanAngleDown;
