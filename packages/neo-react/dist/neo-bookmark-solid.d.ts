import React from 'react';

export interface NeoBookmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBookmarkSolid(props: NeoBookmarkSolidProps): React.ReactElement;
export default NeoBookmarkSolid;
