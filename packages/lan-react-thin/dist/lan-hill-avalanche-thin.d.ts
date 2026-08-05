import React from 'react';

export interface LanHillAvalancheThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHillAvalancheThin(props: LanHillAvalancheThinProps): React.ReactElement;
export default LanHillAvalancheThin;
