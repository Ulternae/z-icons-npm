import React from 'react';

export interface LanWindRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindRegular(props: LanWindRegularProps): React.ReactElement;
export default LanWindRegular;
