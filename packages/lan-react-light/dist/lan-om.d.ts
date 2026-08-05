import React from 'react';

export interface LanOmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOm(props: LanOmProps): React.ReactElement;
export default LanOm;
