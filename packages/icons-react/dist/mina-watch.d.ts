import React from 'react';

export interface MinaWatchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWatch: React.FC<MinaWatchProps>;
export default MinaWatch;
