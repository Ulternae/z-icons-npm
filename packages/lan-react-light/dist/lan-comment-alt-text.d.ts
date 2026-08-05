import React from 'react';

export interface LanCommentAltTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltText(props: LanCommentAltTextProps): React.ReactElement;
export default LanCommentAltText;
