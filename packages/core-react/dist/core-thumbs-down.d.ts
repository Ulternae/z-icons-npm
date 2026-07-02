import React from 'react';

export interface CoreThumbsDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreThumbsDown(props: CoreThumbsDownProps): React.ReactElement;
export default CoreThumbsDown;
