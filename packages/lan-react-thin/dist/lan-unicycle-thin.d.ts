import React from 'react';

export interface LanUnicycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnicycleThin(props: LanUnicycleThinProps): React.ReactElement;
export default LanUnicycleThin;
