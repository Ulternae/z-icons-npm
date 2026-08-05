import React from 'react';

export interface LanSirenOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSirenOn(props: LanSirenOnProps): React.ReactElement;
export default LanSirenOn;
