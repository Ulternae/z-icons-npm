import React from 'react';

export interface LanKidneysProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKidneys(props: LanKidneysProps): React.ReactElement;
export default LanKidneys;
