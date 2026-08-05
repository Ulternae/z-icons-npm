import React from 'react';

export interface LanBedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedRegular(props: LanBedRegularProps): React.ReactElement;
export default LanBedRegular;
