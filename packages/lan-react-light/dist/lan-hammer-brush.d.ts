import React from 'react';

export interface LanHammerBrushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerBrush(props: LanHammerBrushProps): React.ReactElement;
export default LanHammerBrush;
