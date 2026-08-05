import React from 'react';

export interface MinaSproutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSproutSolid(props: MinaSproutSolidProps): React.ReactElement;
export default MinaSproutSolid;
