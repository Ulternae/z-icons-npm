import React from 'react';

export interface LanTromboneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrombone(props: LanTromboneProps): React.ReactElement;
export default LanTrombone;
