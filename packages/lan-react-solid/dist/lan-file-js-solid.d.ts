import React from 'react';

export interface LanFileJsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileJsSolid(props: LanFileJsSolidProps): React.ReactElement;
export default LanFileJsSolid;
