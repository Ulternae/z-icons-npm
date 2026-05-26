import React from 'react';

export interface LanMp3PlayerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMp3Player: React.FC<LanMp3PlayerProps>;
export default LanMp3Player;
