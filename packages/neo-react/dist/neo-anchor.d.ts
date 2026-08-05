import React from 'react';

export interface NeoAnchorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAnchor(props: NeoAnchorProps): React.ReactElement;
export default NeoAnchor;
