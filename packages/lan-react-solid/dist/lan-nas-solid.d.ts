import React from 'react';

export interface LanNasSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNasSolid(props: LanNasSolidProps): React.ReactElement;
export default LanNasSolid;
