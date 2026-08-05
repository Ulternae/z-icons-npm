import React from 'react';

export interface MinaCakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCakeSolid(props: MinaCakeSolidProps): React.ReactElement;
export default MinaCakeSolid;
