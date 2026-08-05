import React from 'react';

export interface LanSimCardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSimCardRegular(props: LanSimCardRegularProps): React.ReactElement;
export default LanSimCardRegular;
