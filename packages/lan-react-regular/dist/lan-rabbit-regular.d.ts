import React from 'react';

export interface LanRabbitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRabbitRegular(props: LanRabbitRegularProps): React.ReactElement;
export default LanRabbitRegular;
