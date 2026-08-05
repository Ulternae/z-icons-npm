import React from 'react';

export interface CoreLinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLinkSolid(props: CoreLinkSolidProps): React.ReactElement;
export default CoreLinkSolid;
