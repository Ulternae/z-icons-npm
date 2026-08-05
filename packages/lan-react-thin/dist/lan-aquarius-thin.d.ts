import React from 'react';

export interface LanAquariusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAquariusThin(props: LanAquariusThinProps): React.ReactElement;
export default LanAquariusThin;
