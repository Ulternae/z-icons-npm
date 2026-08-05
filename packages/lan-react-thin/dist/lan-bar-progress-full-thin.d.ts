import React from 'react';

export interface LanBarProgressFullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressFullThin(props: LanBarProgressFullThinProps): React.ReactElement;
export default LanBarProgressFullThin;
