import React from 'react';

export interface LanTrashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashRegular(props: LanTrashRegularProps): React.ReactElement;
export default LanTrashRegular;
