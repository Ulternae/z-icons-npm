import React from 'react';

export interface LanOctagonCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonCheck(props: LanOctagonCheckProps): React.ReactElement;
export default LanOctagonCheck;
