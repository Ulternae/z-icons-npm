import React from 'react';

export interface LanRulerVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerVerticalThin(props: LanRulerVerticalThinProps): React.ReactElement;
export default LanRulerVerticalThin;
