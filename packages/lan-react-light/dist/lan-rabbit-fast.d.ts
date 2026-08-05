import React from 'react';

export interface LanRabbitFastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRabbitFast(props: LanRabbitFastProps): React.ReactElement;
export default LanRabbitFast;
