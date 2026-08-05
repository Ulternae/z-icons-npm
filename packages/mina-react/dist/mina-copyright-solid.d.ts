import React from 'react';

export interface MinaCopyrightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCopyrightSolid(props: MinaCopyrightSolidProps): React.ReactElement;
export default MinaCopyrightSolid;
