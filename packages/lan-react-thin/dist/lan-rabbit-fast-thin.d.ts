import React from 'react';

export interface LanRabbitFastThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRabbitFastThin(props: LanRabbitFastThinProps): React.ReactElement;
export default LanRabbitFastThin;
