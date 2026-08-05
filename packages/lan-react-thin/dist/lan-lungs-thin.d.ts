import React from 'react';

export interface LanLungsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLungsThin(props: LanLungsThinProps): React.ReactElement;
export default LanLungsThin;
