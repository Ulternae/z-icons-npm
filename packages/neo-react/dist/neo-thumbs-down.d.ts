import React from 'react';

export interface NeoThumbsDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoThumbsDown(props: NeoThumbsDownProps): React.ReactElement;
export default NeoThumbsDown;
