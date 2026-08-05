import React from 'react';

export interface LanCrossRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrossRegular(props: LanCrossRegularProps): React.ReactElement;
export default LanCrossRegular;
