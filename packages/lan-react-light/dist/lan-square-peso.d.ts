import React from 'react';

export interface LanSquarePesoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePeso(props: LanSquarePesoProps): React.ReactElement;
export default LanSquarePeso;
