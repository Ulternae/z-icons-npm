import React from 'react';

export interface LanSagittariusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSagittariusSolid: React.FC<LanSagittariusSolidProps>;
export default LanSagittariusSolid;
