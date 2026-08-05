import React from 'react';

export interface LanSagittariusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSagittarius(props: LanSagittariusProps): React.ReactElement;
export default LanSagittarius;
