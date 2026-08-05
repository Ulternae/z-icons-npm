import React from 'react';

export interface LanSuitcaseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuitcaseThin(props: LanSuitcaseThinProps): React.ReactElement;
export default LanSuitcaseThin;
