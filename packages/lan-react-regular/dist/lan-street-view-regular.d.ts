import React from 'react';

export interface LanStreetViewRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStreetViewRegular(props: LanStreetViewRegularProps): React.ReactElement;
export default LanStreetViewRegular;
