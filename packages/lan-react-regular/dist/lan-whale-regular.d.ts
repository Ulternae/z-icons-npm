import React from 'react';

export interface LanWhaleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWhaleRegular(props: LanWhaleRegularProps): React.ReactElement;
export default LanWhaleRegular;
