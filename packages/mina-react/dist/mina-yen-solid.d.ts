import React from 'react';

export interface MinaYenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenSolid(props: MinaYenSolidProps): React.ReactElement;
export default MinaYenSolid;
