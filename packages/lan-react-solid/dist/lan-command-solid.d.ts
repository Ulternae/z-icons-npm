import React from 'react';

export interface LanCommandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommandSolid(props: LanCommandSolidProps): React.ReactElement;
export default LanCommandSolid;
