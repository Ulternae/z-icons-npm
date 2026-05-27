import React from 'react';

export interface NeoCommentDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCommentDotsSolid: React.FC<NeoCommentDotsSolidProps>;
export default NeoCommentDotsSolid;
