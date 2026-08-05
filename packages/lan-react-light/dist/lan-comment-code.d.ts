import React from 'react';

export interface LanCommentCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentCode(props: LanCommentCodeProps): React.ReactElement;
export default LanCommentCode;
