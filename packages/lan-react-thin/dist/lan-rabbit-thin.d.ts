import React from 'react';

export interface LanRabbitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRabbitThin(props: LanRabbitThinProps): React.ReactElement;
export default LanRabbitThin;
