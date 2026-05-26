import React from 'react';

export interface LanFlagPennantRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagPennantRegular: React.FC<LanFlagPennantRegularProps>;
export default LanFlagPennantRegular;
