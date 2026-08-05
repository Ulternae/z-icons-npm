import React from 'react';

export interface LanCommaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommaThin(props: LanCommaThinProps): React.ReactElement;
export default LanCommaThin;
