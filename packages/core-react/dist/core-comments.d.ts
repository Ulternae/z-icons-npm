import React from 'react';

export interface CoreCommentsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreComments(props: CoreCommentsProps): React.ReactElement;
export default CoreComments;
