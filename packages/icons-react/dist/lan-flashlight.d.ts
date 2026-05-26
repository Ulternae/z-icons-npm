import React from 'react';

export interface LanFlashlightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlashlight: React.FC<LanFlashlightProps>;
export default LanFlashlight;
