import React from 'react';

export interface LanDialMedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMed(props: LanDialMedProps): React.ReactElement;
export default LanDialMed;
