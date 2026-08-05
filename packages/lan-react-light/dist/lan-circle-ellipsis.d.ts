import React from 'react';

export interface LanCircleEllipsisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEllipsis(props: LanCircleEllipsisProps): React.ReactElement;
export default LanCircleEllipsis;
