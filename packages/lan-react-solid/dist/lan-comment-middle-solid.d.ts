import React from 'react';

export interface LanCommentMiddleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentMiddleSolid(props: LanCommentMiddleSolidProps): React.ReactElement;
export default LanCommentMiddleSolid;
