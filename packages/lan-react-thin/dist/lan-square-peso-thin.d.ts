import React from 'react';

export interface LanSquarePesoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePesoThin(props: LanSquarePesoThinProps): React.ReactElement;
export default LanSquarePesoThin;
