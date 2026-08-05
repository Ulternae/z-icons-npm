import React from 'react';

export interface NeoCommentDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCommentDots(props: NeoCommentDotsProps): React.ReactElement;
export default NeoCommentDots;
