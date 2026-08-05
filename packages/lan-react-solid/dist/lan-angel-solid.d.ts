import React from 'react';

export interface LanAngelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngelSolid(props: LanAngelSolidProps): React.ReactElement;
export default LanAngelSolid;
