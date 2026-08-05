import React from 'react';

export interface MinaTableSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTableSolid(props: MinaTableSolidProps): React.ReactElement;
export default MinaTableSolid;
