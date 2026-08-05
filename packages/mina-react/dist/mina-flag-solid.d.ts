import React from 'react';

export interface MinaFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlagSolid(props: MinaFlagSolidProps): React.ReactElement;
export default MinaFlagSolid;
