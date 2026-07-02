import React from 'react';

export interface CoreCommentsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCommentsSolid(props: CoreCommentsSolidProps): React.ReactElement;
export default CoreCommentsSolid;
