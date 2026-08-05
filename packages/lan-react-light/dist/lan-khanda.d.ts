import React from 'react';

export interface LanKhandaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKhanda(props: LanKhandaProps): React.ReactElement;
export default LanKhanda;
