import React from 'react';

export interface LanRulerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerThin(props: LanRulerThinProps): React.ReactElement;
export default LanRulerThin;
