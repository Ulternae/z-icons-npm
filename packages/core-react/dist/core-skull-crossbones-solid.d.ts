import React from 'react';

export interface CoreSkullCrossbonesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSkullCrossbonesSolid(props: CoreSkullCrossbonesSolidProps): React.ReactElement;
export default CoreSkullCrossbonesSolid;
