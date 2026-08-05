import React from 'react';

export interface LanFileJpgSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileJpgSolid(props: LanFileJpgSolidProps): React.ReactElement;
export default LanFileJpgSolid;
