import React from 'react';

export interface LanTildeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTildeThin(props: LanTildeThinProps): React.ReactElement;
export default LanTildeThin;
