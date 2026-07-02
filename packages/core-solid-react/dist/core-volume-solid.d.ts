import React from 'react';

export interface CoreVolumeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVolumeSolid(props: CoreVolumeSolidProps): React.ReactElement;
export default CoreVolumeSolid;
