import React from 'react';

export interface LanFireExtinguisherSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireExtinguisherSolid(props: LanFireExtinguisherSolidProps): React.ReactElement;
export default LanFireExtinguisherSolid;
