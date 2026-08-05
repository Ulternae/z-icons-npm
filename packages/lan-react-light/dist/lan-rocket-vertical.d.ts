import React from 'react';

export interface LanRocketVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRocketVertical(props: LanRocketVerticalProps): React.ReactElement;
export default LanRocketVertical;
