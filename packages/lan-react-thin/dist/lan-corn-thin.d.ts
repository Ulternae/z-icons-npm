import React from 'react';

export interface LanCornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCornThin(props: LanCornThinProps): React.ReactElement;
export default LanCornThin;
