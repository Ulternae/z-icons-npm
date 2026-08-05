import React from 'react';

export interface LanPlaneDepartureRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneDepartureRegular(props: LanPlaneDepartureRegularProps): React.ReactElement;
export default LanPlaneDepartureRegular;
