import React from 'react';

export interface LanSquarePesoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePesoRegular(props: LanSquarePesoRegularProps): React.ReactElement;
export default LanSquarePesoRegular;
