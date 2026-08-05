import React from 'react';

export interface LanFlashlightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlashlightThin(props: LanFlashlightThinProps): React.ReactElement;
export default LanFlashlightThin;
