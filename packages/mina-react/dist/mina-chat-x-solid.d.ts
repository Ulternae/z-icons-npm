import React from 'react';

export interface MinaChatXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChatXSolid(props: MinaChatXSolidProps): React.ReactElement;
export default MinaChatXSolid;
