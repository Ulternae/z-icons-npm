import React from 'react';

export interface LanOtterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOtter(props: LanOtterProps): React.ReactElement;
export default LanOtter;
