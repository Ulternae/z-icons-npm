import React from 'react';

export interface CoreFaceMehSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFaceMehSolid(props: CoreFaceMehSolidProps): React.ReactElement;
export default CoreFaceMehSolid;
