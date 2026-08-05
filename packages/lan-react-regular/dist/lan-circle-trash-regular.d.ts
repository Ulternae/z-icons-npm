import React from 'react';

export interface LanCircleTrashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTrashRegular(props: LanCircleTrashRegularProps): React.ReactElement;
export default LanCircleTrashRegular;
