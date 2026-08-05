import React from 'react';

export interface LanCommentSmileThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentSmileThin(props: LanCommentSmileThinProps): React.ReactElement;
export default LanCommentSmileThin;
