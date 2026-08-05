import React from 'react';

export interface LanUserMessageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMessageSolid(props: LanUserMessageSolidProps): React.ReactElement;
export default LanUserMessageSolid;
