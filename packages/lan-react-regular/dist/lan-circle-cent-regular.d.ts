import React from 'react';

export interface LanCircleCentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCentRegular(props: LanCircleCentRegularProps): React.ReactElement;
export default LanCircleCentRegular;
