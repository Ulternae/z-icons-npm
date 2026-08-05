import React from 'react';

export interface LanDoveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoveRegular(props: LanDoveRegularProps): React.ReactElement;
export default LanDoveRegular;
