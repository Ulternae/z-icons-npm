import React from 'react';

export interface LanTreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeRegular(props: LanTreeRegularProps): React.ReactElement;
export default LanTreeRegular;
