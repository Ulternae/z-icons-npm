import React from 'react';

export interface CoreCommentSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCommentSlash: React.FC<CoreCommentSlashProps>;
export default CoreCommentSlash;
