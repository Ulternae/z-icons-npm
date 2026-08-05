import React from 'react';

export interface LanCircleQProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQ(props: LanCircleQProps): React.ReactElement;
export default LanCircleQ;
