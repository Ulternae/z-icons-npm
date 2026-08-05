import React from 'react';

export interface LanCircleDRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDRegular(props: LanCircleDRegularProps): React.ReactElement;
export default LanCircleDRegular;
