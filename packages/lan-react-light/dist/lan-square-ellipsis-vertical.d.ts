import React from 'react';

export interface LanSquareEllipsisVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEllipsisVertical(props: LanSquareEllipsisVerticalProps): React.ReactElement;
export default LanSquareEllipsisVertical;
