import React from 'react';

export interface LanGreaterThanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGreaterThanThin(props: LanGreaterThanThinProps): React.ReactElement;
export default LanGreaterThanThin;
