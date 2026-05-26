import React from 'react';

export interface LanSquareEllipsisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEllipsis: React.FC<LanSquareEllipsisProps>;
export default LanSquareEllipsis;
