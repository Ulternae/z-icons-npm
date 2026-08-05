import React from 'react';

export interface LanBedBunkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedBunkRegular(props: LanBedBunkRegularProps): React.ReactElement;
export default LanBedBunkRegular;
