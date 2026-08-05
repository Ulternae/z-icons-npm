import React from 'react';

export interface LanDialMedHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMedHigh(props: LanDialMedHighProps): React.ReactElement;
export default LanDialMedHigh;
