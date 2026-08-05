import React from 'react';

export interface NeoPaperPlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPaperPlaneSolid(props: NeoPaperPlaneSolidProps): React.ReactElement;
export default NeoPaperPlaneSolid;
