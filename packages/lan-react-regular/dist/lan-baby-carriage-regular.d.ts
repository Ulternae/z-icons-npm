import React from 'react';

export interface LanBabyCarriageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBabyCarriageRegular(props: LanBabyCarriageRegularProps): React.ReactElement;
export default LanBabyCarriageRegular;
