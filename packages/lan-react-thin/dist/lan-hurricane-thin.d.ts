import React from 'react';

export interface LanHurricaneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHurricaneThin(props: LanHurricaneThinProps): React.ReactElement;
export default LanHurricaneThin;
