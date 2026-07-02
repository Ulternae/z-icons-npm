import React from 'react';

export interface CoreScreencastSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreScreencastSolid(props: CoreScreencastSolidProps): React.ReactElement;
export default CoreScreencastSolid;
