import React from 'react';

export interface LanCircleInfoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleInfoRegular(props: LanCircleInfoRegularProps): React.ReactElement;
export default LanCircleInfoRegular;
