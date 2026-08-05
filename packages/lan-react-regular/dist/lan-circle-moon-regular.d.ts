import React from 'react';

export interface LanCircleMoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMoonRegular(props: LanCircleMoonRegularProps): React.ReactElement;
export default LanCircleMoonRegular;
