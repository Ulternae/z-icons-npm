import React from 'react';

export interface MinaSevenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenSolid(props: MinaSevenSolidProps): React.ReactElement;
export default MinaSevenSolid;
