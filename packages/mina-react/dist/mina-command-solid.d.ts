import React from 'react';

export interface MinaCommandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCommandSolid(props: MinaCommandSolidProps): React.ReactElement;
export default MinaCommandSolid;
