import React from 'react';

export interface LanBoxCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxCheckThin(props: LanBoxCheckThinProps): React.ReactElement;
export default LanBoxCheckThin;
