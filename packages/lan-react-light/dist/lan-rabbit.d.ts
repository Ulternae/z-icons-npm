import React from 'react';

export interface LanRabbitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRabbit(props: LanRabbitProps): React.ReactElement;
export default LanRabbit;
