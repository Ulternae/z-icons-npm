import React from 'react';

export interface NeoThumbsUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoThumbsUp(props: NeoThumbsUpProps): React.ReactElement;
export default NeoThumbsUp;
