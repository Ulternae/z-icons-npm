import React from 'react';

export interface LanCogsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCogsThin(props: LanCogsThinProps): React.ReactElement;
export default LanCogsThin;
