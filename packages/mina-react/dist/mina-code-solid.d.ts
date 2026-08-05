import React from 'react';

export interface MinaCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeSolid(props: MinaCodeSolidProps): React.ReactElement;
export default MinaCodeSolid;
