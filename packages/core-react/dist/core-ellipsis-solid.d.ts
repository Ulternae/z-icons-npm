import React from 'react';

export interface CoreEllipsisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEllipsisSolid(props: CoreEllipsisSolidProps): React.ReactElement;
export default CoreEllipsisSolid;
