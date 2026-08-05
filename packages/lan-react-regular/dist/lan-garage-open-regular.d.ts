import React from 'react';

export interface LanGarageOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageOpenRegular(props: LanGarageOpenRegularProps): React.ReactElement;
export default LanGarageOpenRegular;
