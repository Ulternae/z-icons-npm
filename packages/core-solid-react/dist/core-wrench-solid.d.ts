import React from 'react';

export interface CoreWrenchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWrenchSolid(props: CoreWrenchSolidProps): React.ReactElement;
export default CoreWrenchSolid;
