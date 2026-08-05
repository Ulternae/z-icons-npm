import React from 'react';

export interface LanCommentsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentsSolid(props: LanCommentsSolidProps): React.ReactElement;
export default LanCommentsSolid;
