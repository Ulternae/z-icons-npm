import React from 'react';

export interface MinaBriefcaseConveyorBeltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBriefcaseConveyorBelt: React.FC<MinaBriefcaseConveyorBeltProps>;
export default MinaBriefcaseConveyorBelt;
