import React from 'react';

export interface NeoCrownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCrownSolid(props: NeoCrownSolidProps): React.ReactElement;
export default NeoCrownSolid;
