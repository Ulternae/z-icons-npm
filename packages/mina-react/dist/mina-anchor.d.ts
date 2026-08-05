import React from 'react';

export interface MinaAnchorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAnchor(props: MinaAnchorProps): React.ReactElement;
export default MinaAnchor;
