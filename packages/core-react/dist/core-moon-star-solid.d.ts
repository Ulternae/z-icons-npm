import React from 'react';

export interface CoreMoonStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMoonStarSolid(props: CoreMoonStarSolidProps): React.ReactElement;
export default CoreMoonStarSolid;
