import React from 'react';

export interface MinaBanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBan(props: MinaBanProps): React.ReactElement;
export default MinaBan;
