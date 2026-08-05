import React from 'react';

export interface CoreFileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFileSolid(props: CoreFileSolidProps): React.ReactElement;
export default CoreFileSolid;
