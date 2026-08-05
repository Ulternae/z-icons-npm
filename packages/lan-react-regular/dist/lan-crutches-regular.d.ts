import React from 'react';

export interface LanCrutchesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrutchesRegular(props: LanCrutchesRegularProps): React.ReactElement;
export default LanCrutchesRegular;
