import React from 'react';

export interface NeoCommentsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCommentsSolid: React.FC<NeoCommentsSolidProps>;
export default NeoCommentsSolid;
