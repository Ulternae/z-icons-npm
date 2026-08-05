import React from 'react';

export interface LanFireSmokeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireSmokeRegular(props: LanFireSmokeRegularProps): React.ReactElement;
export default LanFireSmokeRegular;
