import React from 'react';

export interface LanManatSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanManatSignRegular(props: LanManatSignRegularProps): React.ReactElement;
export default LanManatSignRegular;
