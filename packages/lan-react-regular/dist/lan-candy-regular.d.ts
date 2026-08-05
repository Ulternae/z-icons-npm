import React from 'react';

export interface LanCandyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyRegular(props: LanCandyRegularProps): React.ReactElement;
export default LanCandyRegular;
