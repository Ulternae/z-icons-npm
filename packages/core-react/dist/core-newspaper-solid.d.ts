import React from 'react';

export interface CoreNewspaperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreNewspaperSolid(props: CoreNewspaperSolidProps): React.ReactElement;
export default CoreNewspaperSolid;
