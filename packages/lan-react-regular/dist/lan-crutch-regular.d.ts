import React from 'react';

export interface LanCrutchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrutchRegular(props: LanCrutchRegularProps): React.ReactElement;
export default LanCrutchRegular;
