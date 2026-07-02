import React from 'react';

export interface CoreAnchorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAnchorSolid(props: CoreAnchorSolidProps): React.ReactElement;
export default CoreAnchorSolid;
