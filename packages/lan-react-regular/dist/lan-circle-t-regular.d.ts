import React from 'react';

export interface LanCircleTRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTRegular(props: LanCircleTRegularProps): React.ReactElement;
export default LanCircleTRegular;
