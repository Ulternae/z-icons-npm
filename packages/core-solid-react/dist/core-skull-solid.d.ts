import React from 'react';

export interface CoreSkullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSkullSolid(props: CoreSkullSolidProps): React.ReactElement;
export default CoreSkullSolid;
