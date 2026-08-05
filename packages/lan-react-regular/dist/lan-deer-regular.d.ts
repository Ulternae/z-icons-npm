import React from 'react';

export interface LanDeerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDeerRegular(props: LanDeerRegularProps): React.ReactElement;
export default LanDeerRegular;
