import React from 'react';

export interface LanHourglass3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglass3Thin(props: LanHourglass3ThinProps): React.ReactElement;
export default LanHourglass3Thin;
