import React from 'react';

export interface LanKidneysThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKidneysThin(props: LanKidneysThinProps): React.ReactElement;
export default LanKidneysThin;
