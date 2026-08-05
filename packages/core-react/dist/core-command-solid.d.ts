import React from 'react';

export interface CoreCommandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCommandSolid(props: CoreCommandSolidProps): React.ReactElement;
export default CoreCommandSolid;
