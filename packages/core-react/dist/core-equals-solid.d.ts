import React from 'react';

export interface CoreEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEqualsSolid(props: CoreEqualsSolidProps): React.ReactElement;
export default CoreEqualsSolid;
