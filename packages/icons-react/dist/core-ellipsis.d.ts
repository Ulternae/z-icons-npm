import React from 'react';

export interface CoreEllipsisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreEllipsis: React.FC<CoreEllipsisProps>;
export default CoreEllipsis;
