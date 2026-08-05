import React from 'react';

export interface LanAngelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngelRegular(props: LanAngelRegularProps): React.ReactElement;
export default LanAngelRegular;
