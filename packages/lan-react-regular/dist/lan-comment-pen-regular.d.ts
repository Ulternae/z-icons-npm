import React from 'react';

export interface LanCommentPenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentPenRegular(props: LanCommentPenRegularProps): React.ReactElement;
export default LanCommentPenRegular;
