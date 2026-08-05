import React from 'react';

export interface LanBedAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedAltRegular(props: LanBedAltRegularProps): React.ReactElement;
export default LanBedAltRegular;
