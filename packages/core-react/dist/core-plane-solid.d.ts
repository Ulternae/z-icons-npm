import React from 'react';

export interface CorePlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlaneSolid(props: CorePlaneSolidProps): React.ReactElement;
export default CorePlaneSolid;
