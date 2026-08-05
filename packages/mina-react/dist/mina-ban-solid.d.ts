import React from 'react';

export interface MinaBanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBanSolid(props: MinaBanSolidProps): React.ReactElement;
export default MinaBanSolid;
