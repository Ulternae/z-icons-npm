import React from 'react';

export interface CoreBriefcaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBriefcaseSolid(props: CoreBriefcaseSolidProps): React.ReactElement;
export default CoreBriefcaseSolid;
