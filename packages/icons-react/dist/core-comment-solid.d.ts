import React from 'react';

export interface CoreCommentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCommentSolid: React.FC<CoreCommentSolidProps>;
export default CoreCommentSolid;
