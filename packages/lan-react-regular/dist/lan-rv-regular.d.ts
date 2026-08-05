import React from 'react';

export interface LanRvRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRvRegular(props: LanRvRegularProps): React.ReactElement;
export default LanRvRegular;
