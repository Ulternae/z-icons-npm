import React from 'react';

export interface LanCanoePersonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCanoePersonRegular(props: LanCanoePersonRegularProps): React.ReactElement;
export default LanCanoePersonRegular;
