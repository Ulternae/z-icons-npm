import React from 'react';

export interface CoreWandMagicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWandMagicSolid(props: CoreWandMagicSolidProps): React.ReactElement;
export default CoreWandMagicSolid;
