import React from 'react';

export interface CoreCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCirclePlusSolid(props: CoreCirclePlusSolidProps): React.ReactElement;
export default CoreCirclePlusSolid;
