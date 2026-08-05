import React from 'react';

export interface LanAmpGuitarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAmpGuitarSolid(props: LanAmpGuitarSolidProps): React.ReactElement;
export default LanAmpGuitarSolid;
