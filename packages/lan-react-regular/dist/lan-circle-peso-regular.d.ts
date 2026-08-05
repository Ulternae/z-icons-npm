import React from 'react';

export interface LanCirclePesoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePesoRegular(props: LanCirclePesoRegularProps): React.ReactElement;
export default LanCirclePesoRegular;
