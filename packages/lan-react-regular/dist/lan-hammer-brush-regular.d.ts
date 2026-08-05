import React from 'react';

export interface LanHammerBrushRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerBrushRegular(props: LanHammerBrushRegularProps): React.ReactElement;
export default LanHammerBrushRegular;
