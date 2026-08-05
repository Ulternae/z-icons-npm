import React from 'react';

export interface LanCustardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCustard(props: LanCustardProps): React.ReactElement;
export default LanCustard;
