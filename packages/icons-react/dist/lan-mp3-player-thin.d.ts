import React from 'react';

export interface LanMp3PlayerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMp3PlayerThin: React.FC<LanMp3PlayerThinProps>;
export default LanMp3PlayerThin;
