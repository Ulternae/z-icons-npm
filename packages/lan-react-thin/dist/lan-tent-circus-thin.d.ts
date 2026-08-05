import React from 'react';

export interface LanTentCircusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTentCircusThin(props: LanTentCircusThinProps): React.ReactElement;
export default LanTentCircusThin;
