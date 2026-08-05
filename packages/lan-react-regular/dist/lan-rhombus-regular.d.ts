import React from 'react';

export interface LanRhombusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRhombusRegular(props: LanRhombusRegularProps): React.ReactElement;
export default LanRhombusRegular;
