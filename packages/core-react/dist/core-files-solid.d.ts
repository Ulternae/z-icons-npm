import React from 'react';

export interface CoreFilesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFilesSolid(props: CoreFilesSolidProps): React.ReactElement;
export default CoreFilesSolid;
