import React from 'react';

export interface LanBowlSpoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlSpoonRegular(props: LanBowlSpoonRegularProps): React.ReactElement;
export default LanBowlSpoonRegular;
