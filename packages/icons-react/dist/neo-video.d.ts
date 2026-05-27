import React from 'react';

export interface NeoVideoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVideo: React.FC<NeoVideoProps>;
export default NeoVideo;
