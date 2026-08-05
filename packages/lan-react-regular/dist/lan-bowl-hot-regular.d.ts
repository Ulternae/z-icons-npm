import React from 'react';

export interface LanBowlHotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlHotRegular(props: LanBowlHotRegularProps): React.ReactElement;
export default LanBowlHotRegular;
