import React from 'react';

export interface CoreEyeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEyeSolid(props: CoreEyeSolidProps): React.ReactElement;
export default CoreEyeSolid;
