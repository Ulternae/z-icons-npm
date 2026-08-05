import React from 'react';

export interface MinaLampSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLampSolid(props: MinaLampSolidProps): React.ReactElement;
export default MinaLampSolid;
