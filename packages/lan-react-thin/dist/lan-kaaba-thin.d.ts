import React from 'react';

export interface LanKaabaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKaabaThin(props: LanKaabaThinProps): React.ReactElement;
export default LanKaabaThin;
