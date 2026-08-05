import React from 'react';

export interface LanRabbitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRabbitSolid(props: LanRabbitSolidProps): React.ReactElement;
export default LanRabbitSolid;
