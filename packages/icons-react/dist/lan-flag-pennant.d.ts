import React from 'react';

export interface LanFlagPennantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagPennant: React.FC<LanFlagPennantProps>;
export default LanFlagPennant;
