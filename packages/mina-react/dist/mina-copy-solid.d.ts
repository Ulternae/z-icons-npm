import React from 'react';

export interface MinaCopySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCopySolid(props: MinaCopySolidProps): React.ReactElement;
export default MinaCopySolid;
