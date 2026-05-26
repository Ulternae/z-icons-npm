import React from 'react';

export interface LanToggleOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleOnRegular: React.FC<LanToggleOnRegularProps>;
export default LanToggleOnRegular;
