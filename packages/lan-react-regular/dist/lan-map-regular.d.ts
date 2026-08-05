import React from 'react';

export interface LanMapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapRegular(props: LanMapRegularProps): React.ReactElement;
export default LanMapRegular;
