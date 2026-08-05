import React from 'react';

export interface LanLessThanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLessThanThin(props: LanLessThanThinProps): React.ReactElement;
export default LanLessThanThin;
