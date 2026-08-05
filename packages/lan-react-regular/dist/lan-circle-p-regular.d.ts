import React from 'react';

export interface LanCirclePRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePRegular(props: LanCirclePRegularProps): React.ReactElement;
export default LanCirclePRegular;
