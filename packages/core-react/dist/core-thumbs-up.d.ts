import React from 'react';

export interface CoreThumbsUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreThumbsUp(props: CoreThumbsUpProps): React.ReactElement;
export default CoreThumbsUp;
