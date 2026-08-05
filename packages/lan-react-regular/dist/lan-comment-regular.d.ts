import React from 'react';

export interface LanCommentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentRegular(props: LanCommentRegularProps): React.ReactElement;
export default LanCommentRegular;
