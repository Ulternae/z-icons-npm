import React from 'react';

export interface CoreCopySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCopySolid(props: CoreCopySolidProps): React.ReactElement;
export default CoreCopySolid;
