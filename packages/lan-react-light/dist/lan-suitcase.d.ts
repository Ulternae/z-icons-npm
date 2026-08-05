import React from 'react';

export interface LanSuitcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuitcase(props: LanSuitcaseProps): React.ReactElement;
export default LanSuitcase;
