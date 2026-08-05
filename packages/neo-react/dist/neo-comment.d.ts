import React from 'react';

export interface NeoCommentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoComment(props: NeoCommentProps): React.ReactElement;
export default NeoComment;
