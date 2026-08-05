import React from 'react';

export interface MinaZapOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZapOffSolid(props: MinaZapOffSolidProps): React.ReactElement;
export default MinaZapOffSolid;
