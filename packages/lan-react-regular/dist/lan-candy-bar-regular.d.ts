import React from 'react';

export interface LanCandyBarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyBarRegular(props: LanCandyBarRegularProps): React.ReactElement;
export default LanCandyBarRegular;
