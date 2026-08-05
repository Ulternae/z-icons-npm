import React from 'react';

export interface MinaShuffleAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShuffleAlt(props: MinaShuffleAltProps): React.ReactElement;
export default MinaShuffleAlt;
