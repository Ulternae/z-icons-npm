import React from 'react';

export interface CoreFeatherSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFeatherSolid(props: CoreFeatherSolidProps): React.ReactElement;
export default CoreFeatherSolid;
