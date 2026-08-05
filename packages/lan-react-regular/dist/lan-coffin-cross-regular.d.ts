import React from 'react';

export interface LanCoffinCrossRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffinCrossRegular(props: LanCoffinCrossRegularProps): React.ReactElement;
export default LanCoffinCrossRegular;
