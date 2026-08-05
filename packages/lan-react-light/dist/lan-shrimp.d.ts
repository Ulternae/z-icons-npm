import React from 'react';

export interface LanShrimpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShrimp(props: LanShrimpProps): React.ReactElement;
export default LanShrimp;
