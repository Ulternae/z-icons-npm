import React from 'react';

export interface LanBootThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBootThin(props: LanBootThinProps): React.ReactElement;
export default LanBootThin;
