import React from 'react';

export interface NeoPlayPauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPlayPause: React.FC<NeoPlayPauseProps>;
export default NeoPlayPause;
