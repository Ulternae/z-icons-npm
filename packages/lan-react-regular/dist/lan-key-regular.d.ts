import React from 'react';

export interface LanKeyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeyRegular(props: LanKeyRegularProps): React.ReactElement;
export default LanKeyRegular;
