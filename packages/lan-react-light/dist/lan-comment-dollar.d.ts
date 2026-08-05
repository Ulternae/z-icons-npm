import React from 'react';

export interface LanCommentDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentDollar(props: LanCommentDollarProps): React.ReactElement;
export default LanCommentDollar;
