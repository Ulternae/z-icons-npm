import React from 'react';

export interface CoreLinkSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLinkSimpleSolid(props: CoreLinkSimpleSolidProps): React.ReactElement;
export default CoreLinkSimpleSolid;
