import React from 'react';

export interface LanBookSpineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookSpineThin(props: LanBookSpineThinProps): React.ReactElement;
export default LanBookSpineThin;
