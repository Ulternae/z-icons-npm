import React from 'react';

export interface LanCartFlatbedSuitcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartFlatbedSuitcase(props: LanCartFlatbedSuitcaseProps): React.ReactElement;
export default LanCartFlatbedSuitcase;
