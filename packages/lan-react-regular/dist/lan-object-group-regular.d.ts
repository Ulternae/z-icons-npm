import React from 'react';

export interface LanObjectGroupRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectGroupRegular(props: LanObjectGroupRegularProps): React.ReactElement;
export default LanObjectGroupRegular;
