import React from 'react';

export interface CoreCommentSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCommentSlash(props: CoreCommentSlashProps): React.ReactElement;
export default CoreCommentSlash;
