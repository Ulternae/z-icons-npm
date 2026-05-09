import React from 'react';

export interface MinaShuffleAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShuffleAlt: React.FC<MinaShuffleAltProps>;
export default MinaShuffleAlt;
