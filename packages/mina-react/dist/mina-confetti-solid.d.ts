import React from 'react';

export interface MinaConfettiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaConfettiSolid(props: MinaConfettiSolidProps): React.ReactElement;
export default MinaConfettiSolid;
