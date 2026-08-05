import React from 'react';

export interface LanHammerBrushThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerBrushThin(props: LanHammerBrushThinProps): React.ReactElement;
export default LanHammerBrushThin;
