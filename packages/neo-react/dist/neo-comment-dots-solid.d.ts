import React from 'react';

export interface NeoCommentDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCommentDotsSolid(props: NeoCommentDotsSolidProps): React.ReactElement;
export default NeoCommentDotsSolid;
