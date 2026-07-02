import React from 'react';

export interface CoreCommentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCommentSolid(props: CoreCommentSolidProps): React.ReactElement;
export default CoreCommentSolid;
