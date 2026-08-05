import React from 'react';

export interface LanKeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeyThin(props: LanKeyThinProps): React.ReactElement;
export default LanKeyThin;
