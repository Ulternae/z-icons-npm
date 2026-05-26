import React from 'react';

export interface LanFlashlightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlashlightRegular: React.FC<LanFlashlightRegularProps>;
export default LanFlashlightRegular;
