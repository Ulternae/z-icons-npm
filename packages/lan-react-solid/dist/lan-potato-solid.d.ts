import React from 'react';

export interface LanPotatoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPotatoSolid(props: LanPotatoSolidProps): React.ReactElement;
export default LanPotatoSolid;
