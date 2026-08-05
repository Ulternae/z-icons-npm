import React from 'react';

export interface LanCustardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCustardThin(props: LanCustardThinProps): React.ReactElement;
export default LanCustardThin;
