import React from 'react';

export interface LanHourglass1ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglass1Thin(props: LanHourglass1ThinProps): React.ReactElement;
export default LanHourglass1Thin;
