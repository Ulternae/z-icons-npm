import React from 'react';

export interface LanCommentSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentSmile(props: LanCommentSmileProps): React.ReactElement;
export default LanCommentSmile;
