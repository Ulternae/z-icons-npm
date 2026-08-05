import React from 'react';

export interface LanCommentsDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentsDollar(props: LanCommentsDollarProps): React.ReactElement;
export default LanCommentsDollar;
