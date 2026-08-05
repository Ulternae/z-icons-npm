import React from 'react';

export interface LanCommentAltSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltSmile(props: LanCommentAltSmileProps): React.ReactElement;
export default LanCommentAltSmile;
