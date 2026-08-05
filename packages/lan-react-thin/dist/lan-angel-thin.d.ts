import React from 'react';

export interface LanAngelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngelThin(props: LanAngelThinProps): React.ReactElement;
export default LanAngelThin;
