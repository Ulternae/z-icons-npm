import React from 'react';

export interface MinaWrenchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWrenchSolid(props: MinaWrenchSolidProps): React.ReactElement;
export default MinaWrenchSolid;
