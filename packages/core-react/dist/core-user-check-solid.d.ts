import React from 'react';

export interface CoreUserCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUserCheckSolid(props: CoreUserCheckSolidProps): React.ReactElement;
export default CoreUserCheckSolid;
