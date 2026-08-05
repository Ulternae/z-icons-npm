import React from 'react';

export interface LanCircleThreeQuartersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleThreeQuarters(props: LanCircleThreeQuartersProps): React.ReactElement;
export default LanCircleThreeQuarters;
