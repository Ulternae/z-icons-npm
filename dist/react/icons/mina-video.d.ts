import React from 'react';

export interface MinaVideoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVideo: React.FC<MinaVideoProps>;
export default MinaVideo;
