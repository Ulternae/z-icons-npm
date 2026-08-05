import React from 'react';

export interface LanLipsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLipsThin(props: LanLipsThinProps): React.ReactElement;
export default LanLipsThin;
