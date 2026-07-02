import React from 'react';

export interface CoreBookmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBookmarkSolid(props: CoreBookmarkSolidProps): React.ReactElement;
export default CoreBookmarkSolid;
