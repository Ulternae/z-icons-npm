import React from 'react';

export interface MinaCropSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCropSolid(props: MinaCropSolidProps): React.ReactElement;
export default MinaCropSolid;
