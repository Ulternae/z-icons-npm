import React from 'react';

export interface LanBusinessTimeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusinessTimeRegular(props: LanBusinessTimeRegularProps): React.ReactElement;
export default LanBusinessTimeRegular;
