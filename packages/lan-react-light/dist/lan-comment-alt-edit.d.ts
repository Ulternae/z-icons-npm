import React from 'react';

export interface LanCommentAltEditProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltEdit(props: LanCommentAltEditProps): React.ReactElement;
export default LanCommentAltEdit;
