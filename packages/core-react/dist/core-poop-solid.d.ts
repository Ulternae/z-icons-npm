import React from 'react';

export interface CorePoopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePoopSolid(props: CorePoopSolidProps): React.ReactElement;
export default CorePoopSolid;
