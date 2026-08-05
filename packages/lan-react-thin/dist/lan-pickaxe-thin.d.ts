import React from 'react';

export interface LanPickaxeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPickaxeThin(props: LanPickaxeThinProps): React.ReactElement;
export default LanPickaxeThin;
