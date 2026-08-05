import React from 'react';

export interface NeoCommandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCommandSolid(props: NeoCommandSolidProps): React.ReactElement;
export default NeoCommandSolid;
