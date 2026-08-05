import React from 'react';

export interface NeoCommentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCommentSolid(props: NeoCommentSolidProps): React.ReactElement;
export default NeoCommentSolid;
