import React from 'react';

export interface CoreDisplaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreDisplaySolid(props: CoreDisplaySolidProps): React.ReactElement;
export default CoreDisplaySolid;
