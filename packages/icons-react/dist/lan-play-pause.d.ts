import React from 'react';

export interface LanPlayPauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlayPause: React.FC<LanPlayPauseProps>;
export default LanPlayPause;
