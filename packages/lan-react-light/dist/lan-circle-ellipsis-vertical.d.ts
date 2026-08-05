import React from 'react';

export interface LanCircleEllipsisVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEllipsisVertical(props: LanCircleEllipsisVerticalProps): React.ReactElement;
export default LanCircleEllipsisVertical;
