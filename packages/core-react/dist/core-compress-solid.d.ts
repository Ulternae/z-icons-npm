import React from 'react';

export interface CoreCompressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCompressSolid(props: CoreCompressSolidProps): React.ReactElement;
export default CoreCompressSolid;
