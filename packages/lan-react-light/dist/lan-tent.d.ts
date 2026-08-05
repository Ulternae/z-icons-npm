import React from 'react';

export interface LanTentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTent(props: LanTentProps): React.ReactElement;
export default LanTent;
