import React from 'react';

export interface LanBowlRiceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlRiceRegular(props: LanBowlRiceRegularProps): React.ReactElement;
export default LanBowlRiceRegular;
