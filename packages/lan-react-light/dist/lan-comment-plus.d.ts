import React from 'react';

export interface LanCommentPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentPlus(props: LanCommentPlusProps): React.ReactElement;
export default LanCommentPlus;
