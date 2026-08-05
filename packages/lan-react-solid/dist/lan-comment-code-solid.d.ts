import React from 'react';

export interface LanCommentCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentCodeSolid(props: LanCommentCodeSolidProps): React.ReactElement;
export default LanCommentCodeSolid;
