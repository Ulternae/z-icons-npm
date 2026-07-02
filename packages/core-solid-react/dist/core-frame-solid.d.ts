import React from 'react';

export interface CoreFrameSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFrameSolid(props: CoreFrameSolidProps): React.ReactElement;
export default CoreFrameSolid;
