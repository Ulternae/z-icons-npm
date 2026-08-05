import React from 'react';

export interface LanPersonFallingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonFallingThin(props: LanPersonFallingThinProps): React.ReactElement;
export default LanPersonFallingThin;
