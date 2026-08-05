import React from 'react';

export interface LanTrowelBricksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrowelBricksThin(props: LanTrowelBricksThinProps): React.ReactElement;
export default LanTrowelBricksThin;
