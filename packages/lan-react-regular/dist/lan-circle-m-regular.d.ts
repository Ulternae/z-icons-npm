import React from 'react';

export interface LanCircleMRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMRegular(props: LanCircleMRegularProps): React.ReactElement;
export default LanCircleMRegular;
