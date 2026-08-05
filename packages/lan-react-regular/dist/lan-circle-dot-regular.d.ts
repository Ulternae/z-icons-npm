import React from 'react';

export interface LanCircleDotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDotRegular(props: LanCircleDotRegularProps): React.ReactElement;
export default LanCircleDotRegular;
