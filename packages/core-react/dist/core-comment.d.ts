import React from 'react';

export interface CoreCommentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreComment(props: CoreCommentProps): React.ReactElement;
export default CoreComment;
