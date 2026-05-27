import React from 'react';

export interface CoreCommentsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreComments: React.FC<CoreCommentsProps>;
export default CoreComments;
