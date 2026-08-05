import React from 'react';

export interface LanRulerCombinedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerCombined(props: LanRulerCombinedProps): React.ReactElement;
export default LanRulerCombined;
