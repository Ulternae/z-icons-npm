import React from 'react';

export interface CoreKeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreKeySolid(props: CoreKeySolidProps): React.ReactElement;
export default CoreKeySolid;
