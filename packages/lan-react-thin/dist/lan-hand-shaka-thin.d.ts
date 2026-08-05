import React from 'react';

export interface LanHandShakaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandShakaThin(props: LanHandShakaThinProps): React.ReactElement;
export default LanHandShakaThin;
