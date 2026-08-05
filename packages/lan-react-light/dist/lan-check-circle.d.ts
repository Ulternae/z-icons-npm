import React from 'react';

export interface LanCheckCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckCircle(props: LanCheckCircleProps): React.ReactElement;
export default LanCheckCircle;
