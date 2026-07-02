import React from 'react';

export interface CoreBarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBarsSolid(props: CoreBarsSolidProps): React.ReactElement;
export default CoreBarsSolid;
