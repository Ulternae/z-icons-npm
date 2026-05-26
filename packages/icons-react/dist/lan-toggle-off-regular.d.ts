import React from 'react';

export interface LanToggleOffRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleOffRegular: React.FC<LanToggleOffRegularProps>;
export default LanToggleOffRegular;
