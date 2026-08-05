import React from 'react';

export interface LanCircleDongRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDongRegular(props: LanCircleDongRegularProps): React.ReactElement;
export default LanCircleDongRegular;
