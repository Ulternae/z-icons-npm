import React from 'react';

export interface LanBalloonsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalloonsRegular: React.FC<LanBalloonsRegularProps>;
export default LanBalloonsRegular;
