import React from 'react';

export interface CorePaperPlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaperPlaneSolid(props: CorePaperPlaneSolidProps): React.ReactElement;
export default CorePaperPlaneSolid;
