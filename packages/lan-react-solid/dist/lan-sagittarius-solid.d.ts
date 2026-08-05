import React from 'react';

export interface LanSagittariusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSagittariusSolid(props: LanSagittariusSolidProps): React.ReactElement;
export default LanSagittariusSolid;
