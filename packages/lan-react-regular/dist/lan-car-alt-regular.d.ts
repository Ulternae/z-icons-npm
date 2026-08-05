import React from 'react';

export interface LanCarAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarAltRegular(props: LanCarAltRegularProps): React.ReactElement;
export default LanCarAltRegular;
