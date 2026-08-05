import React from 'react';

export interface LanBuoyMooringRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuoyMooringRegular(props: LanBuoyMooringRegularProps): React.ReactElement;
export default LanBuoyMooringRegular;
