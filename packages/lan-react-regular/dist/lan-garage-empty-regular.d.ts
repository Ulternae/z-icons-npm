import React from 'react';

export interface LanGarageEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageEmptyRegular(props: LanGarageEmptyRegularProps): React.ReactElement;
export default LanGarageEmptyRegular;
