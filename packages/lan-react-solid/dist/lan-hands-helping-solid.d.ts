import React from 'react';

export interface LanHandsHelpingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsHelpingSolid(props: LanHandsHelpingSolidProps): React.ReactElement;
export default LanHandsHelpingSolid;
