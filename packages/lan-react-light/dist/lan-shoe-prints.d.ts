import React from 'react';

export interface LanShoePrintsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShoePrints(props: LanShoePrintsProps): React.ReactElement;
export default LanShoePrints;
