import React from 'react';

export interface LanYenSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanYenSignRegular(props: LanYenSignRegularProps): React.ReactElement;
export default LanYenSignRegular;
