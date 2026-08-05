import React from 'react';

export interface LanCommentAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAlt(props: LanCommentAltProps): React.ReactElement;
export default LanCommentAlt;
