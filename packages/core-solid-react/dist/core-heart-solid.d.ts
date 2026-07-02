import React from 'react';

export interface CoreHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHeartSolid(props: CoreHeartSolidProps): React.ReactElement;
export default CoreHeartSolid;
