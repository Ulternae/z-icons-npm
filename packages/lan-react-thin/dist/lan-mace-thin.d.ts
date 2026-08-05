import React from 'react';

export interface LanMaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaceThin(props: LanMaceThinProps): React.ReactElement;
export default LanMaceThin;
