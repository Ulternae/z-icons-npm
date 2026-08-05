import React from 'react';

export interface CoreLeafSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLeafSolid(props: CoreLeafSolidProps): React.ReactElement;
export default CoreLeafSolid;
