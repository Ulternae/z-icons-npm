import React from 'react';

export interface LanCommentSmileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentSmileSolid(props: LanCommentSmileSolidProps): React.ReactElement;
export default LanCommentSmileSolid;
