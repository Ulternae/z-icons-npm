import React from 'react';

export interface LanSpineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpineThin(props: LanSpineThinProps): React.ReactElement;
export default LanSpineThin;
