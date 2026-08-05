import React from 'react';

export interface LanDrawCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrawCircle(props: LanDrawCircleProps): React.ReactElement;
export default LanDrawCircle;
