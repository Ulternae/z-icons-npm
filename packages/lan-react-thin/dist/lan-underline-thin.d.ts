import React from 'react';

export interface LanUnderlineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnderlineThin(props: LanUnderlineThinProps): React.ReactElement;
export default LanUnderlineThin;
