import React from 'react';

export interface LanRugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRugRegular(props: LanRugRegularProps): React.ReactElement;
export default LanRugRegular;
