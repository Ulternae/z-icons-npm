import React from 'react';

export interface MinaOptionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOptionSolid(props: MinaOptionSolidProps): React.ReactElement;
export default MinaOptionSolid;
