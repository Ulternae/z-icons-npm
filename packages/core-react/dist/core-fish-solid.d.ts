import React from 'react';

export interface CoreFishSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFishSolid(props: CoreFishSolidProps): React.ReactElement;
export default CoreFishSolid;
