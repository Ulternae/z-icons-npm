import React from 'react';

export interface LanGarageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageRegular(props: LanGarageRegularProps): React.ReactElement;
export default LanGarageRegular;
