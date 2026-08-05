import React from 'react';

export interface NeoCommentsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoComments(props: NeoCommentsProps): React.ReactElement;
export default NeoComments;
