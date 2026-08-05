import React from 'react';

export interface LanOmegaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOmegaThin(props: LanOmegaThinProps): React.ReactElement;
export default LanOmegaThin;
