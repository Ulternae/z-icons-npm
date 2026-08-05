import React from 'react';

export interface LanBowArrowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowArrowRegular(props: LanBowArrowRegularProps): React.ReactElement;
export default LanBowArrowRegular;
