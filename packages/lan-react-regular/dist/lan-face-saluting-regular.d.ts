import React from 'react';

export interface LanFaceSalutingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSalutingRegular(props: LanFaceSalutingRegularProps): React.ReactElement;
export default LanFaceSalutingRegular;
