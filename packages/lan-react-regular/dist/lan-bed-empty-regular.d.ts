import React from 'react';

export interface LanBedEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedEmptyRegular(props: LanBedEmptyRegularProps): React.ReactElement;
export default LanBedEmptyRegular;
