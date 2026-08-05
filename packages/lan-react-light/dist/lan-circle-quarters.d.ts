import React from 'react';

export interface LanCircleQuartersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuarters(props: LanCircleQuartersProps): React.ReactElement;
export default LanCircleQuarters;
