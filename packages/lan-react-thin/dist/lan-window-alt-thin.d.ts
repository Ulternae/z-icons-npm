import React from 'react';

export interface LanWindowAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowAltThin(props: LanWindowAltThinProps): React.ReactElement;
export default LanWindowAltThin;
