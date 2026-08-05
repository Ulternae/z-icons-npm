import React from 'react';

export interface LanCommentSmsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentSmsSolid(props: LanCommentSmsSolidProps): React.ReactElement;
export default LanCommentSmsSolid;
