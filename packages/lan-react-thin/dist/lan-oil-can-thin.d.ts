import React from 'react';

export interface LanOilCanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOilCanThin(props: LanOilCanThinProps): React.ReactElement;
export default LanOilCanThin;
