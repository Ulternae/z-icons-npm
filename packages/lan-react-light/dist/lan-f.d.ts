import React from 'react';

export interface LanFProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanF(props: LanFProps): React.ReactElement;
export default LanF;
