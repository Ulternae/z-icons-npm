import React from 'react';

export interface LanSmokeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSmokeRegular(props: LanSmokeRegularProps): React.ReactElement;
export default LanSmokeRegular;
