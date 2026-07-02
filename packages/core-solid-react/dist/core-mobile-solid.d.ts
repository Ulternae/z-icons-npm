import React from 'react';

export interface CoreMobileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMobileSolid(props: CoreMobileSolidProps): React.ReactElement;
export default CoreMobileSolid;
