import React from 'react';

export interface LanPlayPauseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlayPauseThin: React.FC<LanPlayPauseThinProps>;
export default LanPlayPauseThin;
