import React from 'react';

export interface LanCommentPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentPen(props: LanCommentPenProps): React.ReactElement;
export default LanCommentPen;
