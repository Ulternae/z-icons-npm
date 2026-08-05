import React from 'react';

export interface LanMillSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMillSignRegular(props: LanMillSignRegularProps): React.ReactElement;
export default LanMillSignRegular;
