import React from 'react';

export interface LanSquareEllipsisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEllipsis(props: LanSquareEllipsisProps): React.ReactElement;
export default LanSquareEllipsis;
