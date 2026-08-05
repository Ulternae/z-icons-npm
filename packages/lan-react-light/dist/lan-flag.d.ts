import React from 'react';

export interface LanFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlag(props: LanFlagProps): React.ReactElement;
export default LanFlag;
