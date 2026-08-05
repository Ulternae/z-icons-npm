import React from 'react';

export interface LanAngelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngel(props: LanAngelProps): React.ReactElement;
export default LanAngel;
