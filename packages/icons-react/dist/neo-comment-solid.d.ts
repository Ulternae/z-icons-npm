import React from 'react';

export interface NeoCommentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCommentSolid: React.FC<NeoCommentSolidProps>;
export default NeoCommentSolid;
