import React from 'react';

export interface LanFlashlightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlashlight(props: LanFlashlightProps): React.ReactElement;
export default LanFlashlight;
