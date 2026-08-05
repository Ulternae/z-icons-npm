import React from 'react';

export interface LanSpadeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpadeThin(props: LanSpadeThinProps): React.ReactElement;
export default LanSpadeThin;
