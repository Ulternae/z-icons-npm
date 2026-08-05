import React from 'react';

export interface LanDiceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceThin(props: LanDiceThinProps): React.ReactElement;
export default LanDiceThin;
