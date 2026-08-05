import React from 'react';

export interface LanCircleSRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSRegular(props: LanCircleSRegularProps): React.ReactElement;
export default LanCircleSRegular;
