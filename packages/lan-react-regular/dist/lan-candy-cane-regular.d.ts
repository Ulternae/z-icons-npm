import React from 'react';

export interface LanCandyCaneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyCaneRegular(props: LanCandyCaneRegularProps): React.ReactElement;
export default LanCandyCaneRegular;
