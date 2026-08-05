import React from 'react';

export interface LanSagittariusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSagittariusRegular(props: LanSagittariusRegularProps): React.ReactElement;
export default LanSagittariusRegular;
