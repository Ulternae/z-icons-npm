import React from 'react';

export interface MinaBriefcaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBriefcaseSolid(props: MinaBriefcaseSolidProps): React.ReactElement;
export default MinaBriefcaseSolid;
