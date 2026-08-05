import React from 'react';

export interface NeoCommentsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCommentsSolid(props: NeoCommentsSolidProps): React.ReactElement;
export default NeoCommentsSolid;
