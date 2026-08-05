import React from 'react';

export interface LanSquareQuartersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareQuarters(props: LanSquareQuartersProps): React.ReactElement;
export default LanSquareQuarters;
