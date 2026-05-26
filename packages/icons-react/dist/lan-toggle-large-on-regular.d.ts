import React from 'react';

export interface LanToggleLargeOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleLargeOnRegular: React.FC<LanToggleLargeOnRegularProps>;
export default LanToggleLargeOnRegular;
