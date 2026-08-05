import React from 'react';

export interface LanCarGarageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarGarageRegular(props: LanCarGarageRegularProps): React.ReactElement;
export default LanCarGarageRegular;
