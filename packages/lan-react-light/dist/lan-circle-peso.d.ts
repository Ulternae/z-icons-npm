import React from 'react';

export interface LanCirclePesoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePeso(props: LanCirclePesoProps): React.ReactElement;
export default LanCirclePeso;
