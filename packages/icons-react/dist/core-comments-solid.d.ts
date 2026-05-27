import React from 'react';

export interface CoreCommentsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCommentsSolid: React.FC<CoreCommentsSolidProps>;
export default CoreCommentsSolid;
