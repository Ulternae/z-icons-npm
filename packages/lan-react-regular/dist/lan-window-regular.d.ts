import React from 'react';

export interface LanWindowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowRegular(props: LanWindowRegularProps): React.ReactElement;
export default LanWindowRegular;
