import React from 'react';

export interface LanCommentAltCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltCheck(props: LanCommentAltCheckProps): React.ReactElement;
export default LanCommentAltCheck;
