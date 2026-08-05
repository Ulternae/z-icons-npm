import React from 'react';

export interface LanSparkleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSparkleThin(props: LanSparkleThinProps): React.ReactElement;
export default LanSparkleThin;
